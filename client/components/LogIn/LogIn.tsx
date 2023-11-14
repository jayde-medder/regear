import styles from './LogIn.module.css'

function LogIn() {
  return (
    <div className={styles['log-in-wrapper']}>
      <a
        id={styles['log-in-button']}
        href="https://react.school"
        target="_blank"
        rel="noreferrer"
      >
        <button>LOG-IN/SIGN-UP</button>
      </a>
    </div>
  )
}

export default LogIn
