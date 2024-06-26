import { useQuery } from '@tanstack/react-query'
import { getItemList, getItemsByTag } from '../../apis/apiItem'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemListing from './ItemListing'
import { SortCombobox } from './Sort By/SortCombobox'
import { SearchCommand } from './Search/SearchCommand'

function Inventory() {
  const { tag } = useParams<{ tag?: string }>()
  const [itemOrder, setItemOrder] = useState<string>('date added')
  const [searchValue, setSearchValue] = useState('')

  //gets array of items in the inventory with a reduced properties list
  const {
    data: inventory,
    isLoading,
    isError,
  } = useQuery(
    ['inventory', tag],
    () => (tag ? getItemsByTag(Number(tag)) : getItemList()),
    { enabled: !!tag || !tag }
  )

  // sets the order of the item list
  const handleSelectChange = (value: string) => {
    setItemOrder(value)
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

  const filteredInventory = inventory.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  )

  const sortedInventory =
    itemOrder === 'a-z'
      ? filteredInventory.slice().sort((a, b) => a.name.localeCompare(b.name))
      : filteredInventory
          .slice()
          .sort(
            (a, b) =>
              new Date(a.date_added).getTime() -
              new Date(b.date_added).getTime()
          )

  return (
    <div className="relative">
      <div className="flex w-full p-1 gap-4 z-10 absolute">
        <SearchCommand
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <SortCombobox
          itemOrder={itemOrder}
          handleSelectChange={handleSelectChange}
        />
      </div>
      <div className="w-full flex flex-wrap z-0 absolute mt-14 pb-14">
        {sortedInventory.map((item) => (
          <div
            key={item.id}
            className="relative w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-1"
          >
            <ItemListing key={item.id} item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Inventory
