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
      className={`bg-white shadow-md rounded-md overflow-hidden p-8 mb-12 ${
        post.isPinned ? 'border border-teal-500' : ''
      }`}
    >
      <p className="text-sm mt-2 ml-4">{formattedDate}</p>
      <h2 className="text-xl font-bold px-4 py-2">{post.title}</h2>
      <p className="px-4 py-2">{post.text}</p>
    </div>
  )
}

export default BlogPost
