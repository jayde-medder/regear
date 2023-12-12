import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

function Nav() {
  return (
    <div className={styles.header}>
      <div className={styles['logo-container']}>
        <Link to={'/'}>
          <img id={styles.logo} src="/images/Logo.png" alt="Re:Gear Logo" />
        </Link>
      </div>
    </div>
  )
}

export default Nav
