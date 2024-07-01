import connection from './connection'
import { Log } from '../../models/log'

const db = connection

// get all logs for an item
export async function getLogsByItemId(item: number): Promise<Log[]> {
  const logs = await db('item_log').where({ item }).select('*')
  return logs
}
