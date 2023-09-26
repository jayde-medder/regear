import MenuButton from './MenuButton'
import '../../public/styles/Header.css' // Import your CSS file

interface HeaderProps {
  toggleSidebar: () => void
  isSidebarOpen: boolean
}

function Header(props: HeaderProps) {
  const headerStyle = {
    width: props.isSidebarOpen ? 'calc(100% - 270px)' : '100%',
  }
  return (
    <div className="header" style={headerStyle}>
      <div className="logo-container">
        <img id="logo" src="../../public/images/Logo.jpg" alt="Re:Gear Logo" />
      </div>
      <MenuButton toggleSidebar={props.toggleSidebar} />
      {/* Additional header content can go here */}
    </div>
  )
}

export default Header
