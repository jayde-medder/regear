import styles from './Sidebar.module.css'
import LogIn from '../LogIn/LogIn.tsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
            <Link to={'/about'}>
              <li>
                <img
                  id={styles['menu-svgs']}
                  src="/images/svg/about.svg"
                  alt="About Re:Gear Icon"
                />
                <div id={styles['menu-listing']}>ABOUT RE:GEAR</div>
              </li>
            </Link>
            <Link to={'/gallery'}>
              <li>
                <img
                  id={styles['menu-svgs']}
                  src="/images/svg/gallery.svg"
                  alt="About Re:Gear Icon"
                />
                <div id={styles['menu-listing']}>GALLERY</div>
              </li>
            </Link>
            <Link to={'/community'}>
              <li>
                <img
                  id={styles['menu-svgs']}
                  src="/images/svg/onlinecom.svg"
                  alt="About Re:Gear Icon"
                />
                <div id={styles['menu-listing']}>JOIN THE ONLINE COMMUNITY</div>
              </li>
            </Link>
            <Link to={'/faq'}>
              <li>
                <img
                  id={styles['menu-svgs']}
                  src="/images/svg/faq.svg"
                  alt="About Re:Gear Icon"
                />
                <div id={styles['menu-listing']}>FAQ&apos;S</div>
              </li>
            </Link>
            <Link to={'/contact'}>
              <li>
                <img
                  id={styles['menu-svgs']}
                  src="/images/svg/contact.svg"
                  alt="About Re:Gear Icon"
                />
                <div id={styles['menu-listing']}>CONTACT</div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
