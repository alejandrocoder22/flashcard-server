import { pool } from '../database/database'

export const getAllPublicCards = async () => {
  return await pool.query('SELECT * FROM cards WHERE is_public = true')
}

export const createCard = async () => {
  return await pool.query('INSERT INTO cards (topic, question, answer, user_id, is_public) VALUES ($1, $2, $3, $4, $5)', ['Science', 'How big earth is', 'Really big', 1, true])
}
