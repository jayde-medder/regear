import request from 'superagent'
import type { Log } from '../../models/log'

const rootUrl = '/api/v1'

// GET /api/v1/:id/logs
export async function getLogsByItemId(id: number): Promise<Log[]> {
  const res = await request.get(`${rootUrl}/log/${id}/logs`)
  if (res.status !== 200) {
    throw new Error('Failed to fetch logs for this item')
  }
  return res.body.logs as Log[]
}
