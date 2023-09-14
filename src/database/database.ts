import { Pool } from 'pg'

export const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT),
  database: process.env.PG_DATABASE

})
