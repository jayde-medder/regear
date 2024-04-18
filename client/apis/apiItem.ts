import request from 'superagent'
import type { CompleteItem, Item, NewItem } from '../../models/item'
import { Tag } from 'models/tag'

const rootUrl = '/api/v1'

// GET /api/v1/inventory
export async function getItemList(): Promise<Item[]> {
  const res = await request.get(`${rootUrl}/inventory`)
  console.log('at inventory API')
  if (res.status !== 200) {
    throw new Error('Failed to fetch items')
  }
  return res.body.inventory as Item[]
}

// Get /api/v1/inventory/admin
// For admin/InventoryManagement
export async function getAllInventory(): Promise<CompleteItem[]> {
  const res = await request.get(`${rootUrl}/admin`)
  if (res.status !== 200) {
    throw new Error('Failed to fetch items')
  }
  return res.body.completeInventory as CompleteItem[]
}

// Get /api/v1/inventory/admin
// For admin/InventoryManagement
export async function getAllTags(): Promise<Tag[]> {
  const res = await request.get(`${rootUrl}/inventory/tag`)
  if (res.status !== 200) {
    throw new Error('Failed to fetch tags')
  }
  return res.body.tags as Tag[]
}

//Post /api/v1/inventory/add
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
}
