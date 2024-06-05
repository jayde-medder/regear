import { fileURLToPath } from 'url'
import { dirname, join, resolve } from 'path'
import express from 'express'
import fs from 'fs'
import dotenv from 'dotenv'
import cors from 'cors'

import postRoutes from './routes/post'
import itemRoutes from './routes/item'
import tagRoutes from './routes/tag'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config()

const server = express()

server.use(express.static(join(__dirname, 'public')))
server.use(express.json())
server.use(cors())

const storageDir = '/app/storage'
if (!fs.existsSync(storageDir)) {
  fs.mkdirSync(storageDir, { recursive: true })
}

const databasePath = join(storageDir, 'prod.sqlite3')

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
