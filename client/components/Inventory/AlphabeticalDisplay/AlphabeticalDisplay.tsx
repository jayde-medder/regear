import { Item } from '../../../../models/inventory'
interface props {
  inventory: Item[]
}
export default function AlphabeticalDisplay({ inventory }: props) {
  const alphabeticalInventory = inventory
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
  return (
    <>
      <ul>
        {alphabeticalInventory.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
          </div>
        ))}
      </ul>
    </>
  )
}
