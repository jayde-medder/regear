import { useQuery } from '@tanstack/react-query'
import styles from './Inventory.module.css'
import { getInventoryList } from '../../apis/apiInventory'
import { ItemList } from '../../../models/inventory'
import { useState } from 'react'
import ItemOrder from '../ItemOrder/ItemDisplayForm'
import CategoryDisplay from '../CategoryDisplay/CategoryDisplay'
import AlphabeticalDisplay from '../AlphabeticalDisplay/AlphabeticalDisplay'
import DateAddedDisplay from '../DateAddedDisplay/DateAddedDisplay'

function Inventory() {
  const {
    data: inventory,
    isLoading,
    isError,
  } = useQuery(['inventory'], () => getInventoryList())

  const [itemOrder, setItemOrder] = useState<string>('A-Z')

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemOrder(event.target.value)
    console.log(`Item order ${itemOrder}`)
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
      {itemOrder === 'A-Z' && <AlphabeticalDisplay inventory={inventory} />}
      {itemOrder === 'Date added' && <DateAddedDisplay inventory={inventory} />}
      {itemOrder === 'Category' && <CategoryDisplay inventory={inventory} />}
    </>
  )
}

export default Inventory
