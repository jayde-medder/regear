import { Router } from 'express'
import * as db from '../db/tag'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const tags = await db.getAllTags()
    res.json({ tags })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Cannot get tags' })
  }
})

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  try {
    const tag = await db.getTagById(id)
    res.json({ tag })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Cannot get tag' })
  }
})

router.get('/:id/parents', async (req, res) => {
  const id = parseInt(req.params.id)
  try {
    const parents = await db.getTagParents(id)
    res.json({ parents })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to fetch parent tags' })
  }
})

export default router
