import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllPosts } from '../../apis/apiPosts'
import BlogPost from './BlogPost'

function Blog() {
  const { data: posts, isLoading, isError } = useQuery(['post'], getAllPosts)

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
    <div>
      {posts.map((post, index) => (
        <React.Fragment key={post.id}>
          <BlogPost key={post.id} post={post} />
          {index !== posts.length - 1}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Blog
