import { Item } from '../../../models/item'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card'

import { Wrench, HandHelping, HeartHandshake } from 'lucide-react'
import { Link } from 'react-router-dom'

interface props {
  item: Item
}

export default function ItemListing({ item }: props) {
  return (
    <Card className="flex flex-col transition-transform transform hover:scale-[101%] hover:shadow-md hover:z-10">
      <Link to={`/inventory/${item.id}`}>
        <CardHeader className="h-[120px] line-clamp-5 ">
          <CardTitle>{item.name}</CardTitle>
          <CardDescription className="overflow-ellipsis overflow-clip">
            {item.desc}
          </CardDescription>
        </CardHeader>
        <div className="w-full flex justify-center items-center">
          <CardContent className="w-full aspect-square">
            <img
              src={item.image_src}
              alt={item.name}
              className="w-[700px] h-full object-contain"
            />
          </CardContent>
        </div>
      </Link>
      <CardFooter className="flex justify-between">
        <TooltipProvider>
          {item.is_borrowable ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary">
                  <HeartHandshake color="green" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Borrow</p>
              </TooltipContent>
            </Tooltip>
          ) : (
            <Button variant="ghost">
              <HeartHandshake color="gray" />
            </Button>
          )}
        </TooltipProvider>

        {item.is_working ? (
          <Button variant="ghost">
            <Wrench color="gray" />
          </Button>
        ) : (
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="secondary">
                <Wrench color="red" />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="border bg-popover px-3 py-1.5 rounded-md w-full">
              <div className="flex flex-col space-y-2">
                <a
                  href="#"
                  className="hover:bg-accent text-sm text-center text-popover-foreground"
                >
                  Fix it yourself
                </a>
                <a
                  href="#"
                  className="hover:bg-accent text-sm text-center text-popover-foreground"
                >
                  Learn to fix
                </a>
                <a
                  href="#"
                  className="hover:bg-accent text-sm text-center text-popover-foreground"
                >
                  Take a workshop
                </a>
              </div>
            </HoverCardContent>
          </HoverCard>
        )}

        <TooltipProvider>
          {item.is_claimable ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary">
                  <HandHelping color="purple" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Claim</p>
              </TooltipContent>
            </Tooltip>
          ) : (
            <Button variant="ghost">
              <HeartHandshake color="gray" />
            </Button>
          )}
        </TooltipProvider>
      </CardFooter>
    </Card>
  )
}
