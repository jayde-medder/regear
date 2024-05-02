import { Link } from 'react-router-dom'
import { NavMenu } from './NavMenu'
import StatsMarquee from './StatsMarquee'

function Nav() {
  return (
    <div className="flex flex-col p-1 w-[calc(100%-50px)] border-black z-50">
      <div className="flex flex-row border-black border-b">
        <div className="px-3 my-1 flex-none border-black border-r">
          <Link to={'/'}>
            <img className="h-9" src="/images/Logo.png" alt="Re:Gear Logo" />
          </Link>
        </div>
        <div className="px-2 my-1 min-w-56 text-xs border-black border-r">
          recirculating electronics hardware in Ōtepoti Dunedin
        </div>
        <div className="min-w-2 p-2 border-black border-r">
          <div className="border-black border rounded-md">
            <StatsMarquee />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <NavMenu />
      </div>
      {/* {location.pathname !== '/inventory' && (
        <IfAuthenticated>
          <div className="p-4">
            <Link to={'/inventory'}>
              <Button>Inventory</Button>
            </Link>
          </div>
        </IfAuthenticated>
      )} */}
    </div>
  )
}

export default Nav
