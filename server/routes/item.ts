import { Router } from 'express'
import * as db from '../db/item'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const inventory = await db.getAllItems()
    res.json({ inventory })
  } catch (error) {
    res.status(500).json({ message: 'Cannot get inventory' })
  }
})

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  try {
    const item = await db.getItemById(id)
    res.json({ item })
  } catch (error) {
    res.status(500).json({ message: 'Cannot get item' })
  }
})

router.get('/tag/:tag', async (req, res) => {
  const tag = parseInt(req.params.tag)
  try {
    const items = await db.getItemsByTag(tag)
    res.json({ items })
  } catch (error) {
    res.status(500).json({ message: 'Cannot get items by tag' })
  }
})

// All inventory for admins
/* router.get('/admin', async (req, res) => {
  try {
    const completeInventory = await db.getCompleteInventory()
    res.json({ completeInventory })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Cannot get inventory' })
  }
}) */

/* 
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
 */
export default router
