import { useState } from 'react'
import '../../public/styles/MenuButton.css'

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
      className={`menu-button ${isOpen ? 'open' : ''}`}
      onMouseEnter={handleClick}
      onClick={handleClick}
    >
      <img
        id="menu-icon"
        src="../../public/images/svg/menu.svg"
        alt="Menu Icon"
      />
    </div>
  )
}

export default MenuButton
