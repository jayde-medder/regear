import { Link } from 'react-router-dom'
import { NavMenu } from './NavMenu'
import StatsMarquee from './StatsMarquee'

function Nav() {
  return (
    <div className="w-full relative flex flex-1 flex-col border-black z-50">
      {/* top row of nav: logo, subheading, marquee */}
      <div className="flex flex-wrap min-[800px]:flex-nowrap flex-row border-black sm:border-b sm:border-r-0 border-r">
        <div className="flex-none mr-8 sm:mr-0 pl-1 pr-2 pt-1 sm:pb-1  border-black sm:border-r">
          <Link to={'/'}>
            <img className="h-9" src="/images/Logo.png" alt="Re:Gear Logo" />
          </Link>
        </div>
        <div className="flex-auto text-wrap px-1 sm:px-2 sm:pt-1 pb-1 min-w-56 text-xs border-black sm:border-r sm:border-b-0  border-b">
          recirculating electronics hardware in Ōtepoti Dunedin
        </div>
        <div className="min-w-0 p-2 border-black border-r hidden sm:block">
          <div className="border-black border rounded-md ">
            <StatsMarquee />
          </div>
        </div>
      </div>
      {/* second row of nav: NavMenu.tsx */}
      <div className="w-full flex sm:justify-end">
        <NavMenu />
      </div>
    </div>
  )
}

export default Nav
