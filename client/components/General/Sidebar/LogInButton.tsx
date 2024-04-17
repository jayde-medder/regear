import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'
import { SidebarButton } from './SidebarButton'

function LogInButton() {
  const { user, logout, loginWithRedirect } = useAuth0()

  return (
    <div>
      <IfAuthenticated>
        <SidebarButton
          className="w-full justify-center"
          variant="default"
          onClick={() => logout()}
        >
          Log Out
        </SidebarButton>
        <p>logged in as {user?.nickname}/user details component to go here</p>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <SidebarButton
          className="w-full justify-center"
          variant="default"
          onClick={() => loginWithRedirect()}
        >
          Log-In / Sign-Up
        </SidebarButton>
      </IfNotAuthenticated>
    </div>
  )
}

export default LogInButton
