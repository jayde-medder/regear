import { getItemById } from '@/apis/apiItem'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

function ItemPage() {
  const { id } = useParams()

  const {
    data: item,
    isLoading,
    isError,
    isFetching,
  } = useQuery(['item'], () => getItemById(Number(id)), {
    staleTime: 0,
    cacheTime: 0,
  })

  if (isError)
    return (
      <>
        <p>FAIL</p>
      </>
    )
  if (isLoading || isFetching)
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
    </>
  )
}

export default ItemPage
