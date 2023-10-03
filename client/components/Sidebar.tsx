import '../../public/styles/Sidebar.css' // Import your CSS file
import LogIn from './LogIn'

interface SidebarProps {
  isOpen: boolean
}

function Sidebar(props: SidebarProps) {
  return (
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
          <div id="menu-listing">FAQ's</div>
        </li>
        <li>
          <img
            id="menu-svgs"
            src="../../public/images/svg/contact.svg"
            alt="About Re:Gear Icon"
          />
          <div id="menu-listing">Contact</div>
        </li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  )
}

export default Sidebar
