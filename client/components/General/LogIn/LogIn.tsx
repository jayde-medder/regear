import styles from './LogIn.module.css'
import { useAuth0 } from '@auth0/auth0-react'
import {
  IfAuthenticated,
  IfNotAuthenticated,
} from '../Authenticated/Authenticated'

function LogIn() {
  const { user, logout, loginWithRedirect } = useAuth0()

  return (
    <div className={styles['log-in-wrapper']}>
      <IfAuthenticated>
        <button id={styles['log-in-button']} onClick={() => logout()}>
          LOG OUT
        </button>
        <p>logged in as {user?.nickname}/user details component to go here</p>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button
          id={styles['log-in-button']}
          onClick={() => loginWithRedirect()}
        >
          LOG-IN/SIGN-UP
        </button>
      </IfNotAuthenticated>
    </div>
  )
}

export default LogIn
