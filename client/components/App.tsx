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
    <div className="App">
      <Header />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Home />
    </div>
  )
}

export default App
