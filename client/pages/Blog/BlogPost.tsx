import styles from './Blog.module.css'
import { Post } from '../../../models/post'

interface PostProps {
  post: Post
}

function BlogPost(props: PostProps) {
  const { post } = props

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div
      className={`${styles['blog-post']} ${
        post.isPinned ? styles.featured : ''
      }`}
    >
      <p className={styles.date}>{formattedDate}</p>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.text}>{post.text}</p>
    </div>
  )
}

export default BlogPost
