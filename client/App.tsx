import Nav from './components/General/Nav.tsx'
import Sidebar from './components/General/Sidebar/Sidebar.tsx'
import Marquee from './components/General/Marquee.tsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Nav />
      <Marquee />
      <Sidebar />
      <body>
        <Outlet />
      </body>
    </div>
  )
}

export default App
