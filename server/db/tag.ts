import connection from './connection'
import { Tag } from '../../models/tag'

const db = connection

export async function getAllTags(): Promise<Tag[]> {
  const tags = await db('tag').select('*')
  return tags
}

export async function getTagById(id: number): Promise<Tag> {
  const tag = await db('tag').where({ id }).select().first()
  return tag
}

export async function getTagParents(id: number): Promise<Tag[]> {
  try {
    let tag = await getTagById(id)
    const parents: Tag[] = []
    while (tag.parent_id) {
      const parent = await getTagById(tag.parent_id)
      parents.push(parent)
      tag = parent
    }
    return parents
  } catch (error) {
    throw new Error(`Failed to fetch parent tags for tag ${id}`)
  }
}
