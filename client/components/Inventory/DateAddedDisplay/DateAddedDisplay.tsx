import { Item } from '../../../../models/inventory'

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
      <ul>
        {dateAddedInventory.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
          </div>
        ))}
      </ul>
    </>
  )
}
