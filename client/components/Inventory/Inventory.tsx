import { useQuery } from '@tanstack/react-query'
import { getItemList } from '../../apis/apiItem'
import { useState } from 'react'
import AlphabeticalDisplay from './Sort By/AlphabeticalDisplay'
import DateAddedDisplay from './Sort By/DateAddedDisplay'
import { SortCombobox } from './Sort By/SortCombobox'
import { SearchCommand } from './Search/SearchCommand'

function Inventory() {
  //gets array of items in the inventory with a reduced properties list
  const {
    data: inventory,
    isLoading,
    isError,
  } = useQuery(['inventory'], () => getItemList())

  //manages state for how inventory list is displayed
  const [itemOrder, setItemOrder] = useState<string>('date added')
  // sets the order of the item list
  const handleSelectChange = (value: string) => {
    setItemOrder(value)
  }

  if (isError)
    return (
      <>
        <h2>
          There seems to be a problem accessing the inventory. Please send us a
          request
        </h2>
      </>
    )
  if (isLoading)
    return (
      <>
        {/* add loading animation */}
        <h2>...Loading... </h2>
      </>
    )

  return (
    <div className="relative">
      <div className="flex w-full gap-4 z-10 absolute">
        <SearchCommand />
        <SortCombobox
          itemOrder={itemOrder}
          handleSelectChange={handleSelectChange}
        />
      </div>
      <div className="flex flex-wrap justify-between w-full z-0 absolute mt-20">
        {inventory && itemOrder === 'a-z' && (
          <AlphabeticalDisplay inventory={inventory} />
        )}
        {inventory && itemOrder === 'date added' && (
          <DateAddedDisplay inventory={inventory} />
        )}
      </div>
    </div>
  )
}

export default Inventory
