import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const orderOptions = [
  {
    value: 'date added',
    label: 'Date Added',
  },
  {
    value: 'a-z',
    label: 'A-Z',
  },
]

interface Props {
  itemOrder: string
  handleSelectChange: (value: string) => void
}

export function SortCombobox({ itemOrder, handleSelectChange }: Props) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-52 h-[46px] justify-between"
        >
          Sort By: {itemOrder === 'date added' ? 'Date Added' : 'A-Z'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          {/* <CommandInput placeholder="Search option..." />
          <CommandEmpty>No option found.</CommandEmpty> */}
          <CommandGroup>
            <CommandList>
              {orderOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={() => {
                    handleSelectChange(option.value)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      itemOrder === option.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
