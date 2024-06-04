import { Link } from 'react-router-dom'
import { NavMenu } from './NavMenu'
import StatsMarquee from './StatsMarquee'

function Nav() {
  return (
    <div className="relative flex flex-1 flex-col border-black z-50">
      {/* top row of nav: logo, subheading, marquee */}
      <div className="flex flex-wrap md:flex-nowrap flex-row border-black border-b">
        <div className="px-3 py-1 flex-none border-black border-r">
          <Link to={'/'}>
            <img className="h-9" src="/images/Logo.png" alt="Re:Gear Logo" />
          </Link>
        </div>
        <div className="flex-auto text-wrap px-2 py-1 w-56 min-w-56 text-xs border-black border-r">
          recirculating electronics hardware in Ōtepoti Dunedin
        </div>
        <div className="min-w-0 p-2 border-black border-r hidden sm:block">
          <div className="border-black border rounded-md ">
            <StatsMarquee />
          </div>
        </div>
      </div>
      {/* second row of nav: NavMenu.tsx */}
      <div className="flex justify-end">
        <NavMenu />
      </div>
    </div>
  )
}

export default Nav
