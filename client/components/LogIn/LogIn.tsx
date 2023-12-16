import styles from './LogIn.module.css'
import { useAuth0 } from '@auth0/auth0-react'
import {
  IfAuthenticated,
  IfNotAuthenticated,
} from '../Authenticated/Authenticated'

function LogIn() {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    return logout()
  }

  const handleSignIn = () => {
    return loginWithRedirect()
  }

  return (
    <div className={styles['log-in-wrapper']}>
      <IfAuthenticated>
        <a
          id={styles['log-in-button']}
          href="https://react.school"
          target="_blank"
          rel="noreferrer"
        >
          <button>LOG-IN/SIGN-UP</button>
        </a>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <a
          id={styles['log-in-button']}
          href="https://react.school"
          target="_blank"
          rel="noreferrer"
        >
          <button>LOG-IN/SIGN-UP</button>
        </a>
      </IfNotAuthenticated>
    </div>
  )
}

export default LogIn
