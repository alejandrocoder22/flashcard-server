import { pool } from '../database/database'
import { flashCard } from '../types'

export const getAllPublicCards = async (): Promise<any> => {
  return await pool.query('SELECT * FROM cards WHERE is_public = true')
}

export const getCardsById = async (userId: number): Promise<any> => {
  return await pool.query('SELECT * FROM cards WHERE user_id = $1', [userId])
}

export const createCard = async (question: string, answer: string, deckId: number): Promise<any> => {
  return await pool.query('INSERT INTO cards (question, answer, deck_id) VALUES ($1, $2, $3)', [question, answer, deckId])
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
  try {
    return await pool.query('UPDATE cards SET topic = $1, question = $2, answer = $3, is_public = $4 WHERE  card_id = $5 AND user_id = $6 ', [topic, question, answer, is_public, cardId, userId])
  } catch (error) {
    return error
  }
}
