import { Router } from 'express'
import * as db from '../db/post'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const post = await db.getAllPosts()
    res.json({ post })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Cannot get post' })
  }
})

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  try {
    const post = await db.getPostById(id)
    res.json({ post })
  } catch (error) {
    res.status(500).json({ message: 'Cannot get post' })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const updatedData = req.body
    const updatedPost = await db.updatePost(id, updatedData)
    res.json(updatedPost[0])
  } catch (error) {
    res.status(500).json({ message: 'Cannot get update' })
  }
})

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    db.deletePost(id)
    res.sendStatus(200)
  } catch (err) {
    res.status(500).send('Could not delete post')
  }
})

router.post('/', async (req, res) => {
  const { ...newPost } = req.body
  try {
    const post = await db.addPost(newPost)
    res.status(200).json({ post })
  } catch (err) {
    res.status(500).send('Could not add new post')
  }
})
export default router
