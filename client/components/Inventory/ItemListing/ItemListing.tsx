import { Item } from '../../../../models/inventory'
import styles from './ItemListing.module.css'
interface props {
  item: Item
}
export default function ItemListing({ item }: props) {
  return (
    <div className={styles['listing-container']}>
      <div className={styles['image-wrapper']}>
        <img src={item.image_src} alt={item.name}></img>
      </div>
      <div className={styles['listing-details']}>
        <h3>{item.name}</h3>
      </div>
    </div>
  )
}
