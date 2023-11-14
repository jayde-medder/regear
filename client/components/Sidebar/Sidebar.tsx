import styles from './Sidebar.module.css'
import LogIn from '../LogIn/LogIn.tsx'
import { useState } from 'react'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleHover = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div
      className={styles['side-menu']}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className={`${styles['menu-button']} ${isOpen ? styles.open : ''}`}>
        <img
          id={styles['menu-icon']}
          src="/images/svg/menu.svg"
          alt="Menu Icon"
        />
      </div>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles['sidebar-content']}>
          <LogIn />
          <ul>
            <li>
              <img
                id={styles['menu-svgs']}
                src="/images/svg/about.svg"
                alt="About Re:Gear Icon"
              />
              <div id={styles['menu-listing']}>ABOUT RE:GEAR</div>
            </li>
            <li>
              <img
                id={styles['menu-svgs']}
                src="/images/svg/gallery.svg"
                alt="About Re:Gear Icon"
              />
              <div id={styles['menu-listing']}>GALLERY</div>
            </li>
            <li>
              <img
                id={styles['menu-svgs']}
                src="/images/svg/onlinecom.svg"
                alt="About Re:Gear Icon"
              />
              <div id={styles['menu-listing']}>JOIN THE ONLINE COMMUNITY</div>
            </li>
            <li>
              <img
                id={styles['menu-svgs']}
                src="/images/svg/faq.svg"
                alt="About Re:Gear Icon"
              />
              <div id={styles['menu-listing']}>FAQ&apos;S</div>
            </li>
            <li>
              <img
                id={styles['menu-svgs']}
                src="/images/svg/contact.svg"
                alt="About Re:Gear Icon"
              />
              <div id={styles['menu-listing']}>CONTACT</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
