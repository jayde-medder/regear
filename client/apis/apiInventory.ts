import request from 'superagent'
import type { ItemList } from '../../models/inventory'

const rootUrl = '/api/v1'

// GET /api/v1/inventory
export async function getInventoryList(): Promise<ItemList[]> {
  const res = await request.get(`${rootUrl}/inventory`)
  console.log('at inventory API')
  if (res.status !== 200) {
    throw new Error('Failed to fetch Inventory')
  }
  return res.body.inventory as ItemList[]
}
