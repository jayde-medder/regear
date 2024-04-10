import Nav from './components/General/Nav/Nav.tsx'
import Sidebar from './components/General/Sidebar/Sidebar.tsx'
import Marquee from './components/General/Marquee/Marquee.tsx'
import styles from './App.module.css'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <h1 className="text-3x1 p14"> Hellooo, world</h1>
    /* <div className={styles.App}>
      <Nav />
      <Marquee />
      <Sidebar />
      <body>
        <Outlet />
      </body>
    </div> */
  )
}

export default App
