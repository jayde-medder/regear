import * as React from 'react'
import { Link } from 'react-router-dom'

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
  return (
    <NavigationMenu className="w-full">
      <NavigationMenuList>
        <NavigationMenuItem className="border-black border-l border-b rounded-bl-md">
          <NavigationMenuTrigger>
            Fix
            <Wrench className="h-3" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Wrench />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Help us build a network of fixers!
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Fix faulty gear">
                View items in our library that are broken. You may donate
                working items back to the library or keep what you fix.
              </ListItem>
              <ListItem href="/" title="Express interest in workshops">
                Learn to fix things. Select broken items from our inventory that
                you would be interested in learning to fix.
              </ListItem>
              <ListItem href="/" title="Take a workshop">
                Put your hand up to show a group of interested people how to fix
                something from the library.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="border-black border-l border-b">
          <NavigationMenuTrigger>
            Borrow
            <HeartHandshake className="h-3" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <NavigationMenuLink asChild>
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <HeartHandshake />
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
        <NavigationMenuItem className="border-black border-l border-b">
          <NavigationMenuTrigger>
            Claim
            <HandHelping className="h-3" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <HandHelping />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Claim parts or working items
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Browse items to take and keep at no cost to you. These
                      items need new homes where they can be put to better use.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Rehome Items">
                Hardware that has been donated, fixed or repurposed by our team
                or the wider community.
              </ListItem>
              <ListItem href="/" title="Parts">
                Put our salvaged parts to use in your own projects.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="border-black border-l border-b border-r rounded-br-md ">
          <Link to={'/inventory'}>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} font-semibold`}
            >
              View All Items
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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
