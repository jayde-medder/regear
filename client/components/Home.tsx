import '../../public/styles/Home.css'
import { useQuery } from '@tanstack/react-query'
import { getAllPosts } from '../apis/apiClient'

function Home() {
  const { data: posts, isLoading, isError } = useQuery(['posts'], getAllPosts)

  if (isError) {
    return (
      <>
        <p>Error retrieving data!</p>
      </>
    )
  }

  if (!posts || isLoading) {
    return <p>...Loading...</p>
  }

  return (
    <div className="home">
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <p>{post.title}</p>
              <p>{post.date.toString()}</p>
              <p>{post.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
