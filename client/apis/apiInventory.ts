import request from 'superagent'
import type { Item } from '../../models/inventory'

const rootUrl = '/api/v1'

// GET /api/v1/inventory
export async function getInventoryList(): Promise<Item[]> {
  const res = await request.get(`${rootUrl}/inventory`)
  console.log('at inventory API')
  if (res.status !== 200) {
    throw new Error('Failed to fetch Inventory')
  }
  return res.body.inventory as Item[]
}
