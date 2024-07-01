import { getItemById } from '@/apis/apiItem'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getLogsByItemId } from '@/apis/apiLog' // Adjust the import path as necessary

function ItemPage() {
  const { id } = useParams()

  const {
    data: item,
    isLoading: isItemLoading,
    isError: isItemError,
    isFetching: isItemFetching,
  } = useQuery(['item', id], () => getItemById(Number(id)), {
    staleTime: 0,
    cacheTime: 0,
  })

  const {
    data: logs,
    isLoading: areLogsLoading,
    isError: areLogsError,
    isFetching: areLogsFetching,
  } = useQuery(['logs', id], () => getLogsByItemId(Number(id)), {
    staleTime: 0,
    cacheTime: 0,
  })

  if (isItemError || areLogsError)
    return (
      <>
        <p>FAIL</p>
      </>
    )

  if (isItemLoading || isItemFetching || areLogsLoading || areLogsFetching)
    return (
      <>
        {/* add loading animation - do it!! */}
        <p>...Loading... cool and sweet </p>
      </>
    )

  return (
    <>
      <p>{item?.name}</p>
      <p>{item?.desc}</p>
      <div>
        <h2>Logs</h2>
        {logs?.map((log) => (
          <div key={log.id}>
            <p>{log.kind}</p>
            <p>{log.short_desc}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default ItemPage
