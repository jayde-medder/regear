import { Item } from '../../../models/item'
interface props {
  item: Item
}

export default function ItemListing({ item }: props) {
  return (
    <>
      <div className="m-1 w-52">
        <div>
          <img src={item.image_src} alt={item.name}></img>
        </div>
        <div>
          <h3>{item.name}</h3>
        </div>
      </div>
    </>
  )
}
