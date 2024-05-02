import connection from './connection'
import { Item } from '../../models/item'
import { Log } from '../../models/log'

const db = connection

export async function getAllItems(): Promise<Item[]> {
  const inventory = await db('item').select('*')
  return inventory
}

export async function getItemById(id: number): Promise<Item> {
  const item = await db('item').where({ id }).select().first()
  return item
}

export async function getLogsByItemId(item: number): Promise<Log[]> {
  const logs = await db('item_log').where({ item }).select('*')
  return logs
}
