import request from 'superagent'
import type { CompleteItem, Item, NewItem } from '../../models/inventory'

const rootUrl = '/api/v1'

// GET /api/v1/inventory
export async function getInventoryList(): Promise<Item[]> {
  const res = await request.get(`${rootUrl}/inventory`)
  // console.log('at inventory API')
  if (res.status !== 200) {
    throw new Error('Failed to fetch Inventory')
  }
  return res.body.inventory as Item[]
}

// Get /api/v1/inventory/admin
// For admin/InventoryManagement
export async function getAllInventory(): Promise<CompleteItem[]> {
  const res = await request.get(`${rootUrl}/inventory/admin`)
  if (res.status !== 200) {
    throw new Error('Failed to fetch Inventory')
  }
  return res.body.completeInventory as CompleteItem[]
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
