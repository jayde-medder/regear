import { fileURLToPath } from 'url'
import { dirname, join, resolve } from 'path'
import express from 'express'
import dotenv from 'dotenv'

import postRoutes from './routes/post'
import itemRoutes from './routes/item'
import tagRoutes from './routes/tag'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const server = express()

server.use(express.static(join(__dirname, 'public')))
server.use(express.json())

server.use('/api/v1/post', postRoutes)
server.use('/api/v1/item', itemRoutes)
server.use('/api/v1/tag', tagRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(resolve('public')))
  server.use('/assets', express.static(resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(resolve('./dist/index.html'))
  })
}

export default server
