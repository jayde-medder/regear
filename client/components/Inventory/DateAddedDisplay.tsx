import { Item } from '../../../models/inventory'
import ItemListing from './ItemListing'

interface props {
  inventory: Item[]
}

export default function DateAddedDisplay({ inventory }: props) {
  const dateAddedInventory = inventory.slice().sort((a, b) => {
    const dateA: Date = new Date(a.date_added)
    const dateB: Date = new Date(b.date_added)

    // Compare the dates
    return dateA.getTime() - dateB.getTime()
  })
  return (
    <>
      {dateAddedInventory.map((item) => (
        <div key={item.id}>
          <ItemListing item={item} />
        </div>
      ))}
    </>
  )
}
