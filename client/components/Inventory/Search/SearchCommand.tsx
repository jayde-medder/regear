import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { useState, useEffect, useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllTags } from '@/apis/apiItem'

export function SearchCommand() {
  const {
    data: tags,
    isLoading,
    isError,
  } = useQuery(['tag'], () => getAllTags())

  const [open, setOpen] = useState<boolean>(false)
  const commandRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        commandRef.current &&
        !commandRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const handleInputClick = () => {
    setOpen(true)
  }

  return (
    <div ref={commandRef}>
      <Command className="rounded-lg border">
        <CommandInput placeholder="Search..." onClick={handleInputClick} />
        {open && (
          <CommandList>
            {isLoading && <span>Loading...</span>}
            {isError && <span>Error fetching tags.</span>}
            {!isLoading && !isError && tags && (
              <>
                {tags.length === 0 && (
                  <CommandEmpty>No results found.</CommandEmpty>
                )}
                {tags.length > 0 && (
                  <>
                    <CommandGroup heading="Tags">
                      {tags.map((tag) => (
                        <CommandItem key={tag.id}>
                          <span>{tag.name}</span>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                    <CommandSeparator />
                  </>
                )}
              </>
            )}
          </CommandList>
        )}
      </Command>
    </div>
  )
}
