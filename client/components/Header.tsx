import LogIn from './LogIn'

function Header() {
  return (
    <div className="header">
      {/* hold ref to public folder pref */}
      <img
        id="logo"
        src="../../server/public/images/Logo.jpg"
        alt="Re:Gear logo"
      ></img>
      <LogIn />
      <div className="nav"></div>
    </div>
  )
}

export default Header
