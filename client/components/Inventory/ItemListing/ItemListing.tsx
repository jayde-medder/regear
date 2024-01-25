import { Item } from '../../../../models/inventory'
import styles from './ItemListing.module.css'
interface props {
  item: Item
}

export default function ItemListing({ item }: props) {
  return (
    <div className={styles['listing-card']}>
      <div className={styles['image-wrapper']}>
        <img src={item.image_src} alt={item.name}></img>
      </div>
      <div className={styles['listing-details']}>
        <h3>{item.name}</h3>
      </div>
      <div className={styles['listing-details']} id={styles.sub}>
        <p>{item.category_id}</p>
      </div>
    </div>
  )
}
