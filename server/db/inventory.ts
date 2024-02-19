import connection from './connection'
import { Item } from '../../models/inventory'
import { Category } from '../../models/categories'
import { Knex } from 'knex'

const db = connection

export async function getAllInventoryList(): Promise<Item[]> {
  const inventoryList = await db('items')
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
  //adds root_category to item object
  const inventoryWithRootParent = await Promise.all(
    inventoryList.map(async (item) => {
      item.root_category = await getRootParentCategoryName(db, item.category_id)
      return item
    })
  )
  return inventoryWithRootParent
}

//function to find root category given a category
async function getRootParentCategoryName(
  knex: Knex,
  categoryId: number
): Promise<string> {
  let currentCategory: Category = await knex('categories')
    .where('id', categoryId)
    .first()

  while (currentCategory && currentCategory.parent_id) {
    currentCategory = await knex('categories')
      .where('id', currentCategory.parent_id)
      .first()
  }
  return currentCategory.name
}

export async function getCompleteInventory() {
  const inventoryList = await db('items')
    .join('categories', 'items.category_id', 'categories.id')
    .select(
      'items.*',
      'categories.name as category_name',
      'categories.parent_id'
    )

  return inventoryList
}
