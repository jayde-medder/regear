import Nav from './components/General/Nav.tsx'
import Sidebar from './components/General/Sidebar/Sidebar.tsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="flex">
        <Nav />
        <Sidebar />
      </div>
      <div className="px-12 py-8">
        <Outlet />
      </div>
    </>
  )
}

export default App
