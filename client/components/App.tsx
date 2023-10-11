import { useState } from 'react'
import Header from './Header.tsx'
import Sidebar from './Sidebar.tsx'
import Home from './Home.tsx'
import Marquee from './Marquee.tsx'
import { Outlet } from 'react-router-dom'
import '../../public/styles/App.css'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="App">
      <Header />
      <Marquee />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Home />
    </div>
  )
}

export default App
