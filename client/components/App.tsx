import { useState } from 'react'
import Header from './Header.tsx'
import Sidebar from './Sidebar.tsx'
import Home from './Home.tsx'
import '../../public/styles/App.css'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className={`App ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} />
      <Home />
    </div>
  )
}

export default App
