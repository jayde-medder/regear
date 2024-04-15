import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { IfAuthenticated } from './Authenticated'
import Sidebar from './Sidebar/Sidebar'

function Nav() {
  const location = useLocation()

  return (
    <div className="flex justify-between sticky">
      <div className="p-4">
        <Link to={'/'}>
          <img className="h-10" src="/images/Logo.png" alt="Re:Gear Logo" />
        </Link>
      </div>
      {location.pathname !== '/inventory' && (
        <IfAuthenticated>
          <div className="p-4">
            <Link to={'/inventory'}>
              <Button>Inventory</Button>
            </Link>
          </div>
        </IfAuthenticated>
      )}
      <div className="p-4">
        <Sidebar />
      </div>
    </div>
  )
}

export default Nav
