import { useState } from 'react'
import styles from './MenuButton.module.css'

interface MenuButtonProps {
  toggleSidebar: () => void
}

function MenuButton(props: MenuButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    props.toggleSidebar() // Notify the parent component of the click event
  }

  return (
    <div
      className={`${styles['menu-button']} ${isOpen ? styles.open : ''}`}
      onMouseEnter={handleClick}
      onClick={handleClick}
    >
      <img
        id={styles['menu-icon']}
        src="/images/svg/menu.svg"
        alt="Menu Icon"
      />
    </div>
  )
}

export default MenuButton
