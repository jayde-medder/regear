import { Item } from '../../../../models/inventory'
import styles from './ItemListing.module.css'
interface props {
  item: Item
}
export default function ItemListing({ item }: props) {
  return (
    <div className={styles['listing-container']}>
      <h3>{item.name}</h3>
      <img src={item.image_src} alt={item.name}></img>
    </div>
  )
}
