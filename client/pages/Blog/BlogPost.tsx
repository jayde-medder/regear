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
      className={`rounded-md overflow-hidden px-6 py-16 mb-8 ${
        post.isPinned ? 'border border-black shadow-md' : ''
      }`}
    >
      <p className="text-sm mt-2 ml-4">{formattedDate}</p>
      <h2 className="text-2xl px-4 py-2">{post.title}</h2>
      <p className="px-4 py-2">{post.text}</p>
    </div>
  )
}

export default BlogPost
