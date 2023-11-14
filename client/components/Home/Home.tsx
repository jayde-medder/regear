import styles from './Home.module.css'
import Blog from '../Blog/Blog.tsx'

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles['header']}>
        <h1 id={styles.header1}>re:Gear</h1>
        <h2 id={styles.header2}>Hardware Library</h2>
      </div>
      <Blog />
    </div>
  )
}

export default Home
