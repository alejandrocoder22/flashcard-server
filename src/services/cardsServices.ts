import { pool } from '../database/database'

export const getAllPublicCards = async () => {
  await pool.query('SELECT * FROM cards WHERE is_public = true')
}
