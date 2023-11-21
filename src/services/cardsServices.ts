import { pool } from '../database/database'
import { flashCard } from '../types'

export const getAllPublicCards = async (): Promise<any> => {
  return await pool.query('SELECT * FROM cards WHERE is_public = true')
}

export const getCardsById = async (userId: number): Promise<any> => {
  return await pool.query('SELECT * FROM cards WHERE user_id = $1', [userId])
}

export const createCard = async (cardData: flashCard): Promise<any> => {
  return await pool.query('INSERT INTO cards (topic, question, answer, user_id, is_public) VALUES ($1, $2, $3, $4, $5)', [cardData.topic, cardData.question, cardData.answer, cardData.user_id, cardData.is_public])
}

export const deleteCard = async (userId: number, cardId: number): Promise<any> => {
  return await pool.query('DELETE FROM cards WHERE card_id = $1 AND user_id = $2', [cardId, userId])
}

export const updateCard = async (cardId: number, userId: number, cardInfo: any): Promise<any> => {
  const {
    topic,
    question,
    answer,
    is_public
  } = cardInfo
  return await pool.query('UPDATE CARDS SET topic = $1, question = $2, answer = $3, is_public = $4 WHERE user_id = $5 AND card_id = $6', [topic, question, answer, is_public, userId, cardId])
}
