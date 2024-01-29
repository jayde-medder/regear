import { Item } from '../../../../models/inventory'
import ItemListing from '../ItemListing/ItemListing'
import styles from './AlphabeticalDisplay.module.css'
interface props {
  inventory: Item[]
}
export default function AlphabeticalDisplay({ inventory }: props) {
  const alphabeticalInventory = inventory
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
  return (
    <>
      {alphabeticalInventory.map((item) => (
        <div className={styles['inventory-list']} key={item.id}>
          <ItemListing item={item} />
        </div>
      ))}
    </>
  )
}
