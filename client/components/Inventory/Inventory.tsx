import { useQuery } from '@tanstack/react-query'
import styles from './Inventory.module.css'
import { getInventoryList } from '../../apis/apiInventory'
import { ItemList } from '../../../models/inventory'
import { useEffect, useState } from 'react'
import ItemOrder from '../ItemOrder/ItemDisplayForm'
import CategoryDisplay from '../CategoryDisplay/CategoryDisplay'
import AlphabeticalDisplay from '../AlphabeticalDisplay/AlphabeticalDisplay'
import DateAddedDisplay from '../DateAddedDisplay/DateAddedDisplay'
import ItemSearchBar from '../ItemSearchBar/ItemSearchBar'
import e from 'express'
import Keywords from '../Keywords/Keywords'

function Inventory() {
  //gets array of items in the inventory with a reduced properties list
  const {
    data: inventory,
    isLoading,
    isError,
  } = useQuery(['inventory'], () => getInventoryList())

  //manages state for string value based on search bar
  const [searchText, setSearchText] = useState<string>('')
  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchText(event.target.value)
    console.log(`searchText ${searchText}`)
  }

  //manages state for how inventory list is displayed
  const [itemOrder, setItemOrder] = useState<string>('A-Z')
  // sets the order of the item list
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemOrder(event.target.value)
  }

  //manages state for filtered inventory list determined by keywords, and checkbox selections
  const [filteredInventory, setFilteredInventory] = useState<ItemList[] | any>(
    []
  )
  //modifies the inventory based on the searchbar input
  useEffect(() => {
    if (searchText !== '' && inventory) {
      const filteredItems = inventory.filter((item) =>
        Object.values(item).some(
          (value) =>
            value &&
            typeof value === 'string' &&
            value.toLowerCase().includes(searchText.toLowerCase())
        )
      )

      setFilteredInventory(filteredItems)
    } else {
      setFilteredInventory(inventory)
    }
  }, [searchText, inventory])

  //manages keywords added via searchbar
  const [keywords, setKeywords] = useState<string[]>([])
  //handles submission of string entered into search bar. Will add term to keywords array
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchText) {
      setKeywords((prevKeywords) => [...prevKeywords, searchText])
    }
    setSearchText('')
  }

  const removeKeyword = (keyword: string) => {
    setKeywords(keywords.filter((value) => value !== keyword))
  }

  if (isError)
    return (
      <>
        <h2>
          There seems to be a problem accessing the inventory. Please send us a
          request
        </h2>
      </>
    )
  if (isLoading)
    return (
      <>
        {/* add loading animation */}
        <h2>...Loading... </h2>
      </>
    )

  return (
    <>
      <ItemOrder
        itemOrder={itemOrder}
        handleSelectChange={handleSelectChange}
      />
      <ItemSearchBar
        searchText={searchText}
        handleSubmit={handleSubmit}
        handleSearchTextChange={handleSearchTextChange}
      />

      <Keywords keywords={keywords} handleClick={removeKeyword} />

      {filteredInventory && itemOrder === 'A-Z' && (
        <AlphabeticalDisplay inventory={filteredInventory} />
      )}
      {filteredInventory && itemOrder === 'Date added' && (
        <DateAddedDisplay inventory={filteredInventory} />
      )}
      {filteredInventory && itemOrder === 'Category' && (
        <CategoryDisplay inventory={filteredInventory} />
      )}
    </>
  )
}

export default Inventory
