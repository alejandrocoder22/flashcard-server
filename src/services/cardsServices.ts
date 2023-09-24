import { pool } from '../database/database'
import { flashCard } from '../types'

export const getAllPublicCards = async () => {
  return await pool.query('SELECT * FROM cards WHERE is_public = true')
}

export const getCardsById = async (userId: number) => {
  return await pool.query('SELECT * FROM cards WHERE user_id = $1', [userId])
}

export const createCard = async (cardData: flashCard) => {
  return await pool.query('INSERT INTO cards (topic, question, answer, user_id, is_public) VALUES ($1, $2, $3, $4, $5)', [cardData.topic, cardData.question, cardData.answer, cardData.user_id, cardData.is_public])
}
