import * as Path from 'node:path'
import * as URL from 'node:url'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import postRoutes from './routes/post.ts'
import itemRoutes from './routes/item.ts'
import tagRoutes from './routes/tag.ts'

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const envConfig = dotenv.config()
  if (envConfig.error) throw envConfig.error
}

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.static(Path.join(__dirname, 'public')))
server.use(express.json())
server.use(cors())

server.use('/api/v1/post', postRoutes)
server.use('/api/v1/item', itemRoutes)
server.use('/api/v1/tag', tagRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
