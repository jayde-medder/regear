import { Item } from '../../../../models/item'
import ItemListing from '../ItemListing'

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
        <div key={item.id} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <ItemListing item={item} />
        </div>
      ))}
    </>
  )
}
