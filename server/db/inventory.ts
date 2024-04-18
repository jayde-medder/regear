import connection from './connection'
import { Item, NewItem } from '../../models/item'
import { Tag } from '../../models/tag'
import { Knex } from 'knex'

const db = connection

export async function getAllInventoryList(): Promise<Item[]> {
  const inventory = await db('item').select('*')
  return inventory
  /*   const inventoryList = await db('item')
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
  return inventoryWithRootParent */
}

//function to find root category given a category
async function getRootParentTagName(
  knex: Knex,
  categoryId: number
): Promise<string> {
  let currentTag: Tag = await knex('tag').where('id', categoryId).first()

  while (currentTag && currentTag.parent_id) {
    currentTag = await knex('tag').where('id', currentTag.parent_id).first()
  }
  return currentTag.name
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

export async function getAllTags(): Promise<Tag[]> {
  const tags = await db('tag').select('*')
  return tags
}

export async function addNewInventoryItem(itemData: NewItem) {
  try {
    // Insert the new item into the database
    await db('items').insert({
      item_name: itemData.itemName,
      has_fault: itemData.faulty ? 1 : 0,
      image_src: itemData.image ? itemData.image.name : '',
      description: itemData.description,
      weight: itemData.weight,
      location: itemData.location,
      certification_needed: itemData.certificationNeeded ? 1 : 0,
      cert_expiry_date: itemData.certificationExpiryDate,
      category_id: itemData.categoryId,
    })

    // Return the ID of the inserted item
  } catch (error) {
    throw new Error('Failed to add item to inventory')
  }
}
