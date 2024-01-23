import { Item } from '../../../../models/inventory'
import ItemListing from '../ItemListing/ItemListing'
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
        <div key={item.id}>
          <ItemListing item={item} />
        </div>
      ))}
    </>
  )
}
