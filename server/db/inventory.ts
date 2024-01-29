import connection from './connection'
import { Item } from '../../models/inventory'

const db = connection

export async function getAllInventoryList(): Promise<Item[]> {
  return db('items')
    .join('categories', 'items.category_id', 'categories.id')
    .select(
      'items.id',
      'items.item_name as name',
      'items.date_added',
      'items.has_fault',
      'items.checked_out',
      'items.image_src',
      'items.category_id',
      'categories.name as category_name',
      'categories.parent_id'
    )
}
