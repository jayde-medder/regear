import Nav from '../General/Nav/Nav.tsx'
import Sidebar from '../General/Sidebar/Sidebar.tsx'
import Marquee from '../General/Marquee/Marquee.tsx'
import styles from './App.module.css'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className={styles.App}>
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
