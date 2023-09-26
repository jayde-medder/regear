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
        <li>About Re:Gear</li>
        <li>Gallery</li>
        <li>Join the Online Community</li>
        <li>FAQ's</li>
        <li>Contact</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  )
}

export default Sidebar
