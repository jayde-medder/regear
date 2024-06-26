import { Link } from 'react-router-dom'
import { Recycle, Images, Boxes, Info, Bell, Menu } from 'lucide-react'
import { SidebarItems } from 'models/sidebarItems.ts'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { SidebarButton } from './SidebarButton.tsx'
import LogInButton from './LogInButton.tsx'

const sidebarItems: SidebarItems = {
  links: [
    { label: 'About Re:Gear', href: '/about', icon: Recycle },
    { label: 'Gallery', href: '/gallery', icon: Images },
    { label: 'Join the Online Community', href: '/community', icon: Boxes },
    { label: "FAQ's", href: '/faq', icon: Info },
    { label: 'Contact us', href: '/contact', icon: Bell },
  ],
  extras: <LogInButton />,
}

export function Sidebar() {
  /* const isDesktop = useMediaQuery('(min-width: 640px)') */

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="w-max-content flex-none">
          <Button
            size="icon"
            variant="ghost"
            className="flex-none w-10 z-50 relative top-0 right-0 border-black border"
          >
            <Menu size={20} />
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent>
        <div className="h-full px-1 py-4">
          <div className="mt-5">
            <div className="flex flex-col gap-5 w-full">
              {sidebarItems.links.map((link, index) => (
                <Link key={index} to={link.href}>
                  <SidebarButton
                    variant={
                      location.pathname === link.href ? 'secondary' : 'sidebar'
                    }
                    icon={link.icon}
                    className="w-full"
                  >
                    {link.label}
                  </SidebarButton>
                </Link>
              ))}
              {sidebarItems.extras}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar
