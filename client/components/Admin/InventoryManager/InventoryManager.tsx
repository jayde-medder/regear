import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

function InventoryManager() {
  const {
    data: inventory,
    isLoading,
    isError,
  } = useQuery(['adminInventory'], () => getAllInventory())

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
    <>
      <h2>adminInventory</h2>
    </>
  )
}

export default InventoryManager
