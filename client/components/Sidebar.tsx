import '../../public/styles/Sidebar.css' // Import your CSS file
import LogIn from './LogIn'

interface SidebarProps {
  isOpen: boolean
}

function Sidebar(props: SidebarProps) {
  return (
    <div className={`sidebar ${props.isOpen ? 'open' : ''}`}>
      <ul>
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        {/* Add more menu items as needed */}
      </ul>
      <div className="vertical-space"></div>
      <LogIn />
    </div>
  )
}

export default Sidebar
