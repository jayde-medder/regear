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

interface props {
  item: Item
}

export default function ItemListing({ item }: props) {
  return (
    <Card className="w-[250px] h-[430px] flex flex-col mb-4">
      <CardHeader className="flex-grow">
        <CardTitle>{item.name}</CardTitle>
        <CardDescription className="line-clamp-3">{item.desc}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <img src={item.image_src} alt={item.name}></img>
      </CardContent>
      <CardFooter className="flex justify-between">
        {item.is_borrowable ? (
          <Button variant="secondary">
            <HeartHandshake />
          </Button>
        ) : null}
        {item.is_claimable ? (
          <Button variant="secondary">
            <HandHelping />
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  )
}
