import { Item } from '../../../../models/inventory'
import styles from './DateAddedDisplay.module.css'
import ItemListing from '../ItemListing/ItemListing'

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
        <div className={styles['inventory-list']} key={item.id}>
          <ItemListing item={item} />
        </div>
      ))}
    </>
  )
}
