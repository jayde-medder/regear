import { CompleteItem, Item } from '../../../../models/item'
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
        <div key={item.id} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <ItemListing item={item} />
        </div>
      ))}
    </>
  )
}
