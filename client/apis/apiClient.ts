import request from 'superagent'
import type { Post, PostData } from '../../models/posts'

const rootUrl = '/api/v1'

export async function getAllposts(): Promise<Post[]> {
  const res = await request.get(rootUrl + '/posts')
  if (res.status !== 200) {
    throw new Error('Failed to fetch posts')
  }
  return res.body.posts as Post[]
}

export async function getpostById(id: number): Promise<Post | undefined> {
  const res = await request.get(rootUrl + `/posts/${id}`)
  if (res.status !== 200) {
    throw new Error(`Failed to fetch post with ID ${id}`)
  }
  return res.body.post
}

export async function updatePost({
  id,
  post,
}: {
  id: number
  post: Post
}): Promise<void> {
  await request.patch(rootUrl + `/posts/${id}`).send(post)
}

export async function deletePost(id: number): Promise<void> {
  await request.delete(rootUrl + `/posts/${id}`)
}

export async function addPost(newPost: PostData): Promise<void> {
  await request.post(rootUrl + '/posts').send({ ...newPost })
}
