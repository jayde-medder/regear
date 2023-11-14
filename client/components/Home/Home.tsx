import styles from './Home.module.css'
import { useQuery } from '@tanstack/react-query'
import { getAllPosts } from '../../apis/apiClient'

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
    <div className={styles.home}>
      <div className={styles['header']}>
        <h1>re:Gear</h1>
        <h2>Hardware Library</h2>
      </div>
      <div className={styles.blog}>
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
