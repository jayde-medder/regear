import { useState } from 'react'
import Nav from '../Nav/Nav.tsx'
import Sidebar from '../Sidebar/Sidebar.tsx'
// import Home from '../Home/Home.tsx'
import Marquee from '../Marquee/Marquee.tsx'
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
