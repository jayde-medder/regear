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

// All inventory for admins
router.get('/admin', async (req, res) => {
  try {
    const completeInventory = await db.getCompleteInventory()
    res.json({ completeInventory })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Cannot get inventory' })
  }
})

router.get('/categories', async (req, res) => {
  try {
    const categories = await db.getAllCategories()
    res.json({ categories })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Cannot get categories' })
  }
})

router.post('/add', async (req, res) => {
  try {
    const itemData = req.body
    itemData.certificationExpiryDate =
      itemData.certificationExpiryDate !== ''
        ? itemData.certificationExpiryDate
        : null

    await db.addNewInventoryItem(itemData)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'cannot add item to inventory' })
  }
})

export default router
