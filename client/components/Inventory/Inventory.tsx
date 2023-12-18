import { useQuery } from '@tanstack/react-query'
import styles from './Inventory.module.css'
import { getInventoryList } from '../../apis/apiInventory'
import { ItemList } from '../../../models/inventory'
import { useState } from 'react'
import ItemOrder from '../ItemOrder/ItemOrder'

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

  //Maps items into categories, so that they can be displayed by category if desired. Might need to alter the approach for conditional rendering of a subset of categories, but should work I hope.
  const organizeData = (inventory: ItemList[]) => {
    const categoriesMap = new Map()

    const processCategory = (
      item: ItemList,
      parentCategory: {
        subcategories: {
          id: number
          name: string
          items: ItemList[]
          subcategories: never[]
        }[]
      }
    ) => {
      const category = parentCategory.subcategories.find(
        (sub) => sub.id === item.category_id
      )

      if (category) {
        category.items.push(item)
      } else {
        parentCategory.subcategories.push({
          id: item.category_id,
          name: `${item.category_name}`,
          items: [item],
          subcategories: [],
        })
      }
    }

    inventory.forEach((item) => {
      if (item.parent_id) {
        const parentCategory = categoriesMap.get(item.parent_id) || {
          subcategories: [],
        }
        processCategory(item, parentCategory)
        categoriesMap.set(item.parent_id, parentCategory)
      } else {
        const category = categoriesMap.get(item.category_id) || {
          id: item.category_id,
          name: `${item.category_name}`,
          items: [],
          subcategories: [],
        }
        category.items.push(item)
        categoriesMap.set(item.category_id, category)
      }
    })

    console.log(Array.from(categoriesMap.values())) // Log the data structure

    return Array.from(categoriesMap.values())
  }

  const renderCategory = (category: {
    id: number
    name: string
    items: ItemList[]
    subcategories: any[]
  }) => (
    <div key={category.id}>
      <h2>{category.name}</h2>
      {category.items.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
      {/* Render items for subcategories */}
      {category.subcategories.map((subcategory) => (
        <div key={subcategory.id}>
          <h3>{subcategory.name}</h3>
          {subcategory.items.map((item: ItemList) => (
            <div key={item.id}>
              <p>{item.name}</p>
              {/* Add more item details as needed */}
            </div>
          ))}
          {/* Recursively render subcategories */}
          {subcategory.subcategories.map(renderCategory)}
        </div>
      ))}
    </div>
  )

  return (
    <>
      <ItemOrder
        itemOrder={itemOrder}
        handleSelectChange={handleSelectChange}
      />
      <div>{organizeData(inventory).map(renderCategory)}</div>
    </>
  )
}

export default Inventory
