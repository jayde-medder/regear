import { CompleteItem, Item } from '../../../../models/inventory'
import ItemListing from '../ItemListing'
interface props {
  inventory: Item[] | CompleteItem[]
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
