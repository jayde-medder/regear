import { Item } from '../../../../models/inventory'
interface props {
  inventory: Item[]
}
export default function CategoryDisplay({ inventory }: props) {
  //Maps items into categories, so that they can be displayed by category if desired.
  //Might need to alter the approach for conditional rendering of a subset of categories,
  //but should work I hope.
  const organizeData = (inventory: Item[]) => {
    const categoriesMap = new Map()

    const processCategory = (
      item: Item,
      parentCategory: {
        subcategories: {
          id: number
          name: string
          items: Item[]
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
    items: Item[]
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
          {subcategory.items.map((item: Item) => (
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
      <div>{organizeData(inventory).map(renderCategory)}</div>
    </>
  )
}
