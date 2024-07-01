import connection from './connection'
import { Item } from '../../models/item'
import { Log } from '../../models/log'

const db = connection

async function addStatusesToItem(item: Item): Promise<Item> {
  const is_working = await getItemWorkingStatus(item.id)
  const is_certified = await getCertificationStatus(item.id)
  return { ...item, is_working, is_certified }
}

export async function getAllItems(): Promise<Item[]> {
  const inventory = await db('item').select('*')
  // Fetch and add working and certification statuses for each item
  const itemsWithStatuses = await Promise.all(inventory.map(addStatusesToItem))

  return itemsWithStatuses
}

export async function getItemById(id: number): Promise<Item> {
  const item = await db('item').where({ id }).select().first()
  if (item) {
    return addStatusesToItem(item)
  }
  return item
}

export async function getItemsByTag(tag: number): Promise<Item[]> {
  const items = await db('item')
    .join('item_tags', 'item.id', '=', 'item_tags.item')
    .where('item_tags.tag', tag)
    .select('item.*')
  // Fetch and add working and certification statuses for each item
  const itemsWithStatuses = await Promise.all(items.map(addStatusesToItem))

  return itemsWithStatuses
}

export async function getLogsByItemId(item: number): Promise<Log[]> {
  const logs = await db('item_log').where({ item }).select('*')
  return logs
}

// get the working status of an item
export async function getItemWorkingStatus(item: number): Promise<boolean> {
  // get all logs, order by date descending
  const logs = await db('item_log')
    .where('item', item)
    .orderBy('datetime', 'desc')

  // if no logs for item - set default working status to true
  if (logs.length === 0) {
    return true
  }

  // Iterate through logs and set to false if 'Faulty'
  for (const log of logs) {
    const kind = await db('log_kind').where('id', log.kind).first()
    if (kind.name === 'Faulty') {
      return false
    } else if (kind.name === 'Repaired') {
      return true
    }
  }

  // set to true if all logs pertained to cert/not state of repair
  return true
}

// get the certification status of an item (can be null if N/A)
export async function getCertificationStatus(
  item: number
): Promise<boolean | null> {
  //get latest log pertaining to cert
  const latestCertLog = await db('item_log')
    .where('item', item)
    .andWhere('kind', 'in', [3, 4])
    .orderBy('datetime', 'desc')
    .first()

  // return status based on latest cert log
  if (latestCertLog) {
    const kind = await db('log_kind').where('id', latestCertLog.kind).first()
    if (kind.name === 'Certified') {
      return true
    } else if (kind.name === 'Needs Certification') {
      return false
    }
  }

  // if no cert logs return null in the case of cert being N/A
  return null
}
