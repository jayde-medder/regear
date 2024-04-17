import request from 'superagent'
import type { Post, PostData } from '../../models/post'

const rootUrl = '/api/v1'

// GET /api/v1/post
export async function getAllPosts(): Promise<Post[]> {
  const res = await request.get(rootUrl + '/post')
  if (res.status !== 200) {
    throw new Error('Failed to fetch post')
  }
  return res.body.post as Post[]
}

// GET /api/v1/post/:id
export async function getPostById(id: number): Promise<Post | undefined> {
  const res = await request.get(rootUrl + `/post/${id}`)
  if (res.status !== 200) {
    throw new Error(`Failed to fetch post with ID ${id}`)
  }
  return res.body.post
}

// PATCH /api/v1/post/:id
export async function updatePost({
  id,
  post,
}: {
  id: number
  post: Post
}): Promise<void> {
  await request.patch(rootUrl + `/post/${id}`).send(post)
}

// DELETE /api/v1/post/:id
export async function deletePost(id: number): Promise<void> {
  await request.delete(rootUrl + `/post/${id}`)
}

// POST /api/v1/post
export async function addPost(newPost: PostData): Promise<void> {
  await request.post(rootUrl + '/post').send({ ...newPost })
}
