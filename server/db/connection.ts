import knexFile from './knexfile'
import knex, { Knex } from 'knex'

type Environment = 'production' | 'test' | 'development'

const environment = (process.env.NODE_ENV || 'development') as Environment
const config = knexFile[environment]
const connection: Knex = knex(config)

export default connection
