import { pool } from '../database/database'

export const userExist = async (username: string, email: string) => {
  const user = await pool.query('SELECT * FROM users WHERE username = $1 OR email = $2', [username, email])
  return user.rows
}

export const createUser = (username: string, email: string, hashedPassword: string) => {
  return pool.query('INSERT INTO users (username, password, email) VALUES($1, $2, $3)', username, hashedPassword, email)
}
