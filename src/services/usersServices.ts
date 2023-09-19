import { pool } from '../database/database'

export const userExist = async ({ username, email }) => {
  const user = await pool.query('SELECT * FROM users WHERE username = $1 OR email = $2')
  return user
}
