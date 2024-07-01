import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { HeartHandshake, HandHelping, Wrench } from 'lucide-react'

export function NavMenu() {
  const location = useLocation()
  const showViewAllItemsLink = location.pathname !== '/inventory'

  return (
    <>
      <NavigationMenu className="justify-start">
        <NavigationMenuList className=" border-black border-b border-l border-r rounded-b-md">
          <NavigationMenuItem className="border-black border-r">
            <NavigationMenuTrigger>
              <h2 className="hidden sm:block">Borrow</h2>
              <HeartHandshake color="green" className="h-5 sm:h-3" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <HeartHandshake color="green" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Borrow from the Hardware Library
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      View our inventory and send a request to borrow an item.
                      We&apos;re flexible on how long you can borrow for.
                    </p>
                  </a>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="border-black border-r">
            <NavigationMenuTrigger>
              <p className="hidden sm:block">Fix</p>
              <Wrench color="red" className="h-5 sm:h-3" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-4">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Wrench color="red" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Help us build a network of fixers!
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Actively participate in our community.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/" title="Fix faulty gear">
                  View items in our library that are broken and volunteer to fix
                  them.
                </ListItem>
                <ListItem href="/" title="Express interest in workshops">
                  Select broken items you&apos;re interested in learning to fix.
                </ListItem>
                <ListItem href="/" title="Take a workshop">
                  Show community members how to fix something we have that is
                  broken.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <p className="hidden sm:block">Claim</p>
              <HandHelping color="purple" className="h-5 sm:h-3" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <HandHelping color="purple" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Claim parts or working items
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Browse items to take and keep at no cost to you. These
                        items need new homes where they can be put to better
                        use.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/" title="Claim Items">
                  Take repurposed gear and give it a new life!
                </ListItem>
                <ListItem href="/" title="Claim Parts">
                  Put our salvaged parts to use in your own projects.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu className="flex-none justify-end">
        <NavigationMenuList>
          {showViewAllItemsLink && (
            <Link to={'/inventory'}>
              <NavigationMenuItem className="border-black border-b border-r border-l rounded-bl-md rounded-br-md">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-semibold`}
                  asChild
                >
                  <Link to={'/inventory'}>
                    <p>View All</p>
                    <p className="hidden sm:block">&nbsp;Items</p>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </Link>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
