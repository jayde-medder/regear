import Nav from './components/General/Nav.tsx'
import Sidebar from './components/General/Sidebar/Sidebar.tsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="flex w-full gap-2 p-2">
        <Nav />
        <Sidebar />
      </div>
      <div className="p-4">
        <Outlet />
      </div>
    </>
  )
}

export default App
