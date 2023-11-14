import { useState } from 'react'
import Nav from '../Nav/Nav.tsx'
import Sidebar from '../Sidebar/Sidebar.tsx'
import Home from '../Home/Home.tsx'
import Marquee from '../Marquee/Marquee.tsx'
import styles from './App.module.css'

function App() {
  const [sidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!sidebarOpen)
  }

  return (
    <div className={styles.App}>
      <Nav />
      <Marquee />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Home />
    </div>
  )
}

export default App
