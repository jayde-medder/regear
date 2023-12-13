import { useQuery } from '@tanstack/react-query'
import styles from './Inventory.module.css'
import { getInventoryList } from '../../apis/apiInventory'
import { ItemList } from '../../../models/inventory'

function Inventory() {
  const {
    data: inventory,
    isLoading,
    isError,
  } = useQuery(['inventory'], () => getInventoryList())

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

  const organizeData = (inventory: ItemList[]) => {
    const categoriesMap = new Map()

    // Group items by category_id
    inventory.forEach((item) => {
      const category = categoriesMap.get(item.category_id) || {
        id: item.category_id,
        name: `${item.category_name}`,
        items: [],
        subcategories: [],
      }

      if (item.parent_id) {
        const parentCategory = categoriesMap.get(item.parent_id) || {
          subcategories: [],
        }

        const subcategory = parentCategory.subcategories.find(
          (sub: { id: number }) => sub.id === category.id
        )

        if (subcategory) {
          // If subcategory already exists, push the item to its items array
          subcategory.items.push(item)
        } else {
          // If subcategory doesn't exist, create a new one
          parentCategory.subcategories.push({
            id: category.id,
            name: category.name,
            items: [item], // Create a new items array with the current item
            subcategories: [],
          })
        }

        categoriesMap.set(item.parent_id, parentCategory)
      } else {
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
          {/* Add more item details as needed */}
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

  return <div>{organizeData(inventory).map(renderCategory)}</div>
}

export default Inventory
