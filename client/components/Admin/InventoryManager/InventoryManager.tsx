import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { getAllInventory } from '../../../apis/apiInventory'

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
      <h2>Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            {/* Add more table headers for other properties */}
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              {/* Add more table cells for other properties */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default InventoryManager
