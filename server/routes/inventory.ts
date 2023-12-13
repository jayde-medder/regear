import { Router } from 'express'
import * as db from '../db/inventory'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const inventory = await db.getAllInventoryList()
    res.json({ inventory })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Cannot get inventory' })
  }
})

export default router
