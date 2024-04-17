import connection from './connection'
import { Post, PostData } from '../../models/post'

const db = connection

export async function getAllPosts(): Promise<Post[]> {
  return db('post').select()
}

export async function getPostById(id: number): Promise<Post> {
  return db('post').where({ id }).select().first()
}

export async function addPost(post: PostData): Promise<Post> {
  return db('post')
    .insert({ ...post })
    .returning(['id', 'title', 'text', 'isPinned'])
}

export async function deletePost(id: number): Promise<void> {
  await db('post').where({ id }).delete()
}

export async function updatePost(id: number, updatedData: PostData) {
  return db('post')
    .where({ id })
    .update({ ...updatedData })
    .returning(['id', 'title', 'text', 'isPinned'])
}
