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
        {item.is_borrowable ? (
          <Button variant="secondary">
            <HeartHandshake color="green" />
          </Button>
        ) : null}
        {item.is_claimable ? (
          <Button variant="secondary">
            <HandHelping color="purple" />
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  )
}
