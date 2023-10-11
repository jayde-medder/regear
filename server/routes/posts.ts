import request from 'superagent'
import express from 'express'

import * as db from '../db/connection.ts'

const router = express.Router()

router.get('/', async(req, res) => {
  const posts = await db.getPosts()
  res.render
}

// * For testing only - to display all data from restaurants table
// router.get('/', async (req, res) => {
//   try {
//     const restaurants = await db.getRestaurants()
//     res.render('restaurant', { restaurants: restaurants })
//   } catch (err) {
//     res.status(500).send('DATABASE ERROR: ' + err.message)
//   }
// })

export default router
