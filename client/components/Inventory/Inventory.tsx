import { useQuery } from '@tanstack/react-query'
import styles from './Inventory.module.css'

function Inventory() {
  const {
    data: inventory,
    isLoading,
    isError,
  } = useQuery(['inventory'], () => getInventory())
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
        <h2>...Loading </h2>
      </>
    )
  return (
    <div>
      <h1>Inventory</h1>
    </div>
  )
}

export default Inventory
