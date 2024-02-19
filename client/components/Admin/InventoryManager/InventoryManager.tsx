import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { getAllInventory } from '../../../apis/apiInventory'

function InventoryManager() {
  const {
    data: inventory,
    isLoading,
    isError,
  } = useQuery(['adminInventory'], () => getAllInventory())

  const [columnVisibility, setColumnVisibility] = useState<{
    [key: string]: boolean
  }>({})

  if (inventory && Object.keys(columnVisibility).length === 0) {
    const initialVisibilty: { [key: string]: boolean } = {}
    Object.keys(inventory[0]).forEach((column) => {
      initialVisibilty[column] = false
    })
    setColumnVisibility(initialVisibilty)
  }

  const toggleColumnVisibility = (column: string) => {
    setColumnVisibility((prevState) => ({
      ...prevState,
      [column]: !prevState[column],
    }))
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
    <div>
      <div>
        {/* Checkbox for each column */}
        {inventory &&
          Object.keys(columnVisibility).map((column, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={columnVisibility[column]}
                onChange={() => toggleColumnVisibility(column)}
              />
              {column}
            </label>
          ))}
      </div>

      <table>
        <thead>
          <tr>
            {/* Render table headers based on columnVisibility */}
            {Object.keys(columnVisibility).map(
              (column, index) =>
                columnVisibility[column] && <th key={index}>{column}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {/* Render table cells based on columnVisibility */}
              {Object.entries(item).map(
                ([key, value], colIndex) =>
                  columnVisibility[key] && <td key={colIndex}>{value}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default InventoryManager
