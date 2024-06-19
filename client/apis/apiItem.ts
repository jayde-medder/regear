import request from 'superagent'
import type { Item } from '../../models/item'

const rootUrl = '/api/v1'

// GET /api/v1/item
export async function getItemList(): Promise<Item[]> {
  const res = await request.get(`${rootUrl}/item`)
  if (res.status !== 200) {
    throw new Error('Failed to fetch items')
  }
  return res.body.inventory as Item[]
}

//GET /api/v1/item/id
export async function getItemById(id: number): Promise<Item> {
  const res = await request.get(`${rootUrl}/item/${id}`)
  if (res.status !== 200) {
    throw new Error('Failed to fetch item')
  }
  return res.body.item
}

//GET /api/v1/item/tag/:tagId
export async function getItemsByTag(tag: number): Promise<Item[]> {
  const res = await request.get(`${rootUrl}/item/tag/${tag}`)
  if (res.status != 200) {
    throw new Error('Failed to fetch items by tag')
  }
  return res.body.items as Item[]
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
