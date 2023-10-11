import '../../public/styles/Sidebar.css'
import LogIn from './LogIn'
import MenuButton from './MenuButton'

interface SidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
}

function Sidebar(props: SidebarProps) {
  return (
    <div className="side-menu">
      <MenuButton toggleSidebar={props.toggleSidebar} />
      <div className={`sidebar ${props.isOpen ? 'open' : ''}`}>
        <LogIn />
        <ul>
          <li>
            <img
              id="menu-svgs"
              src="../../public/images/svg/about.svg"
              alt="About Re:Gear Icon"
            />
            <div id="menu-listing">About Re:Gear</div>
          </li>
          <li>
            <img
              id="menu-svgs"
              src="../../public/images/svg/gallery.svg"
              alt="About Re:Gear Icon"
            />
            <div id="menu-listing">Gallery</div>
          </li>
          <li>
            <img
              id="menu-svgs"
              src="../../public/images/svg/onlinecom.svg"
              alt="About Re:Gear Icon"
            />
            <div id="menu-listing">Join the Online Community</div>
          </li>
          <li>
            <img
              id="menu-svgs"
              src="../../public/images/svg/faq.svg"
              alt="About Re:Gear Icon"
            />
            <div id="menu-listing">FAQ&apos;s</div>
          </li>
          <li>
            <img
              id="menu-svgs"
              src="../../public/images/svg/contact.svg"
              alt="About Re:Gear Icon"
            />
            <div id="menu-listing">Contact</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
