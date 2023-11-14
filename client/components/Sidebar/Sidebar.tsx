import styles from './Sidebar.module.css'
import LogIn from '../LogIn/LogIn.tsx'
import MenuButton from '../MenuButton/MenuButton.tsx'

interface SidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
}

function Sidebar(props: SidebarProps) {
  return (
    <div className={styles['side-menu']}>
      <MenuButton isOpen={props.isOpen} toggleSidebar={props.toggleSidebar} />
      <div
        className={`${styles.sidebar} ${props.isOpen ? styles.open : ''}`}
        onMouseLeave={props.toggleSidebar}
      >
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
