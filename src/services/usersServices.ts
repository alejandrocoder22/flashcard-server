import { pool } from '../database/database'

export const userExist = async (username: string, email: string = '') => {
  const user = await pool.query('SELECT * FROM users WHERE username = $1 OR email = $2', [username, email])
  return user.rows
}

export const createUserService = async (username: string, email: string, hashedPassword: string) => {
  return await pool.query('INSERT INTO users (username, password, email) VALUES($1, $2, $3) RETURNING *', [username, hashedPassword, email])
}

export const deleteUserService = async (userId: number) => {
  return await pool.query('DELETE FROM users WHERE user_id=$1', [userId])
}
