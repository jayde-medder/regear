import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllTags, getParentTagPath } from '@/apis/apiTag'

export function SearchCommand() {
  const {
    data: tags,
    isLoading,
    isError,
  } = useQuery(['tag'], () => getAllTags())

  const [open, setOpen] = useState<boolean>(false)
  const [searchValue, setsearchValue] = useState('')
  const [parentPaths, setParentPaths] = useState<{ [key: string]: string }>({})
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

  const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation()
    setOpen(true)
  }

  const handleValueChange = (value: string) => {
    setsearchValue(value)
  }

  const isLeafNode = useCallback(
    (tagId: number) => {
      return tags ? tags.every((tag) => tag.parent_id !== tagId) : false
    },
    [tags]
  )

  useEffect(() => {
    // Prepare parent paths for all tags
    const prepareParentPaths = async () => {
      const paths: { [key: string]: string } = {}
      if (tags) {
        for (const tag of tags) {
          if (isLeafNode(tag.id)) {
            const path = await getParentTagPath(tag.id)
            paths[tag.id.toString()] = path
          }
        }
        setParentPaths(paths)
      }
    }

    prepareParentPaths()
  }, [tags, isLeafNode]) // Trigger when tags change

  return (
    <div ref={commandRef} className="flex-grow">
      <Command
        className="rounded-lg border"
        filter={(value, search) => {
          if (value.includes(search)) return 1
          return 0
        }}
      >
        <CommandInput
          placeholder="Search..."
          onValueChange={handleValueChange}
          onClick={handleInputClick}
        />
        {open && searchValue === '' && (
          <CommandList className="transition duration-1000">
            {isLoading && <CommandEmpty>Loading...</CommandEmpty>}
            {isError && <CommandEmpty>Error fetching tags.</CommandEmpty>}
            {!isLoading && !isError && tags && (
              <>
                <CommandEmpty>No results found.</CommandEmpty>
                {tags.length > 0 && (
                  <>
                    <CommandGroup heading="Suggested Tags...">
                      {tags
                        .filter((tag) => isLeafNode(tag.id))
                        .slice(0, 3)
                        .map((tag) => (
                          <CommandItem key={tag.id} value={tag.name}>
                            <div>
                              <h4 className="scroll-m-20 text-l font-semibold">
                                {tag.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {parentPaths[tag.id.toString()]}
                              </p>
                            </div>
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
        {open && searchValue !== '' && (
          <CommandList>
            {isLoading && <CommandEmpty>Loading...</CommandEmpty>}
            {isError && <CommandEmpty>Error fetching tags.</CommandEmpty>}
            {!isLoading && !isError && tags && (
              <>
                <CommandEmpty>No results found.</CommandEmpty>
                {tags.length > 0 && (
                  <>
                    <CommandGroup heading="Tags">
                      {tags
                        .filter((tag) => isLeafNode(tag.id))
                        .map((tag) => (
                          <CommandItem key={tag.id} value={tag.name}>
                            <div>
                              <h4 className="scroll-m-20 text-l font-semibold">
                                {tag.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {parentPaths[tag.id.toString()]}
                              </p>
                            </div>
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
