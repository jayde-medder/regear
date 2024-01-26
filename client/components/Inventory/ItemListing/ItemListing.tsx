import { Item } from '../../../../models/inventory'
import styles from './ItemListing.module.css'
import { useState } from 'react'
interface props {
  item: Item
}

export default function ItemListing({ item }: props) {
  const [isOpen, setIsOpen] = useState(false)

  const handleHover = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div
        className={`${styles['listing-card']} ${isOpen ? styles.open : ''}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <div className={styles['image-wrapper']}>
          <img src={item.image_src} alt={item.name}></img>
        </div>
        <div className={styles['listing-header']}>
          <h3>{item.name}</h3>
        </div>
        <div
          className={`${styles['listing-details']} ${
            isOpen ? styles.open : ''
          }`}
        >
          <h3>Category: {item.category_id}</h3>
        </div>
      </div>
    </>
  )
}
