import styles from './Nav.module.css'

function Nav() {
  return (
    <div className={styles.header}>
      <div className={styles['logo-container']}>
        <img id={styles.logo} src="/images/Logo.png" alt="Re:Gear Logo" />
      </div>
    </div>
  )
}

export default Nav
