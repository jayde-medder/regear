import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getItemList } from '../../../apis/apiItem'
import { Link } from 'react-router-dom'

function InventoryManager() {
  const {
    data: inventory,
    isLoading,
    isError,
  } = useQuery(['adminInventory'], () => getItemList())

  const [columnVisibility, setColumnVisibility] = useState<{
    [key: string]: boolean
  }>({})

  if (inventory && Object.keys(columnVisibility).length === 0) {
    const initialVisibility: { [key: string]: boolean } = {}
    Object.keys(inventory[0]).forEach((column) => {
      initialVisibility[column] = false
    })
    // Set id and item_name columns always visible
    initialVisibility['id'] = true
    initialVisibility['item_name'] = true
    setColumnVisibility(initialVisibility)
  }

  const toggleColumnVisibility = (column: string) => {
    setColumnVisibility((prevState) => ({
      ...prevState,
      [column]: !prevState[column],
    }))
  }

  const resetColumnVisibility = () => {
    setColumnVisibility({})
  }

  const selectAllColumns = () => {
    setColumnVisibility((prevState) => {
      const updatedVisibility = { ...prevState }
      Object.keys(updatedVisibility).forEach((column) => {
        updatedVisibility[column] = true
      })
      return updatedVisibility
    })
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
        {/* todo add loading animation */}
        <h2>...Loading... </h2>
      </>
    )

  return (
    <div>
      <div>
        <Link to="add">
          <button>Add New Inventory </button>
        </Link>
      </div>
      <div>
        <button onClick={() => resetColumnVisibility()}>Clear all</button>
        <button onClick={() => selectAllColumns()}>Select all</button>
      </div>
      <div>
        {inventory &&
          Object.keys(columnVisibility).map(
            (column, index) =>
              column !== 'id' &&
              column !== 'item_name' && (
                <label key={index}>
                  <input
                    type="checkbox"
                    checked={columnVisibility[column]}
                    onChange={() => toggleColumnVisibility(column)}
                  />
                  {column}
                </label>
              )
          )}
      </div>

      <table>
        <thead>
          <tr>
            {/* Always render 'id' and 'item_name' columns*/}
            <th>id</th>
            <th>item_name</th>
            {/* Render table headers based on columnVisibility */}
            {Object.keys(columnVisibility).map(
              (column, index) =>
                columnVisibility[column] &&
                column !== 'id' &&
                column !== 'item_name' && <th key={index}>{column}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, rowIndex) => (
            <tr key={rowIndex}>
              <td>{item['id']}</td>
              <td>{item['item_name']}</td>
              {Object.entries(item).map(
                ([key, value], colIndex) =>
                  columnVisibility[key] &&
                  key !== 'id' &&
                  key !== 'item_name' && <td key={colIndex}>{value}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default InventoryManager
