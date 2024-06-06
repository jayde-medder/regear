import * as Path from 'node:path'
import * as URL from 'node:url'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

export default {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'jayde',
      password: 'Thix7cpip4E',
      database: 'regear',
      port: 5432,
    },
    migrations: {
      directory: Path.join(__dirname, 'migrations'),
    },
    seeds: {
      directory: Path.join(__dirname, 'seeds'),
    },
  },

  test: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: Path.join(__dirname, 'migrations'),
    },
    seeds: {
      directory: Path.join(__dirname, 'seeds'),
    },
  },

  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: Path.join(__dirname, 'migrations'),
    },
    seeds: {
      directory: Path.join(__dirname, 'seeds'),
    },
  },
}
