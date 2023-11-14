import connection from './connection'
import { Post, PostData } from '../../models/posts'

const db = connection

export async function getAllPosts(): Promise<Post[]> {
  return db('posts').select()
}

export async function getPostById(id: number): Promise<Post> {
  return db('posts').where({ id }).select().first()
}

export async function addPost(post: PostData): Promise<Post> {
  return db('posts')
    .insert({ ...post })
    .returning(['id', 'title', 'text', 'isPinned'])
}

export async function deletePost(id: number): Promise<void> {
  await db('posts').where({ id }).delete()
}

export async function updatePost(id: number, updatedData: PostData) {
  return db('posts')
    .where({ id })
    .update({ ...updatedData })
    .returning(['id', 'title', 'text', 'isPinned'])
}
