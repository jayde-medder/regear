import request from 'superagent'
import type { Item } from '../../models/item'
import { Tag } from 'models/tag'

const rootUrl = '/api/v1'

// GET /api/v1/inventory
export async function getItemList(): Promise<Item[]> {
  const res = await request.get(`${rootUrl}/inventory`)
  if (res.status !== 200) {
    throw new Error('Failed to fetch items')
  }
  return res.body.inventory as Item[]
}

// GET /api/v1/inventory/tag
export async function getAllTags(): Promise<Tag[]> {
  const res = await request.get(`${rootUrl}/inventory/tag`)
  if (res.status !== 200) {
    throw new Error('Failed to fetch tags')
  }
  return res.body.tags as Tag[]
}

export async function getParentTagPath(id: number): Promise<string> {
  try {
    const res = await request.get(`${rootUrl}/inventory/tag/${id}/parents`)
    if (res.status !== 200) {
      throw new Error(
        `Failed to fetch parent tags for tag ${id}. Status: ${res.status}`
      )
    }
    const parentTags = res.body.parents // Assuming the response is an array of parent tags
    if (!Array.isArray(parentTags)) {
      throw new Error(`Invalid response format: parentTags is not an array`)
    }
    if (parentTags.length === 0) {
      return '' // Return an empty string if no parent tags are found
    }
    const path = parentTags
      .map((tag) => tag.name)
      .reverse()
      .join(' > ')
    const currentTagRes = await request.get(`${rootUrl}/inventory/tag/${id}`)
    if (currentTagRes.status !== 200) {
      throw new Error(
        `Failed to fetch tag information for tag ${id}. Status: ${currentTagRes.status}`
      )
    }
    const currentTagName = currentTagRes.body.tag.name
    return `${path} > ${currentTagName}`
  } catch (error) {
    console.error(error)
    throw new Error(`Failed to fetch parent tags for tag ${id}`)
  }
}

/* //Post /api/v1/inventory/add
export async function addNewInventoryItem(formData: NewItem) {
  try {
    const res = await request.post(`${rootUrl}/inventory/add`).send(formData)

    if (res.status !== 200) {
      throw new Error('Failed to add item to inventory')
    }

    return res.status
  } catch (error) {
    throw new Error('Failed to add item to inventory')
  }
} */

/* // Get /api/v1/inventory/admin
// For admin/InventoryManagement
export async function getAllInventory(): Promise<CompleteItem[]> {
  const res = await request.get(`${rootUrl}/admin`)
  if (res.status !== 200) {
    throw new Error('Failed to fetch items')
  }
  return res.body.completeInventory as CompleteItem[]
} */
