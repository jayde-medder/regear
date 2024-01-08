import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'
import { IfAuthenticated } from '../Authenticated/Authenticated'

function Nav() {
  const location = useLocation()

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Link to={'/'}>
          <img id={styles.logo} src="/images/Logo.png" alt="Re:Gear Logo" />
        </Link>
      </div>
      {location.pathname !== '/inventory' && (
        <IfAuthenticated>
          <div className={styles.wrapper}>
            <Link to={'/inventory'}>
              <button id={styles['inventory-button']}>
                GO TO INVENTORY &gt;&gt;
              </button>
            </Link>
          </div>
        </IfAuthenticated>
      )}
    </div>
  )
}

export default Nav
