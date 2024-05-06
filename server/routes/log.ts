import { Router } from 'express'
import * as db from '../db/log'

const router = Router()

router.get('/:id/logs', async (req, res) => {
  const itemId = parseInt(req.params.id)
  try {
    const logs = await db.getLogsByItemId(itemId)
    res.json({ logs })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to fetch item logs' })
  }
})

export default router
