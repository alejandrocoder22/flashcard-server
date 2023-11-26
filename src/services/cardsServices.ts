import { pool } from '../database/database'

export const getAllPublicCards = async (): Promise<any> => {
  return await pool.query('SELECT * FROM cards WHERE is_public = true')
}

export const getCardsById = async (userId: number): Promise<any> => {
  return await pool.query('SELECT * FROM cards WHERE user_id = $1', [userId])
}

export const createCard = async (question: string, answer: string, deckId: number, userId: number): Promise<any> => {
  return await pool.query('INSERT INTO cards (question, answer, deck_id, user_id) VALUES ($1, $2, $3, $4)', [question, answer, deckId, userId])
}

export const deleteCard = async (userId: number, cardId: number): Promise<any> => {
  return await pool.query('DELETE FROM cards WHERE card_id = $1 AND user_id = $2', [cardId, userId])
}

export const updateCard = async (cardId: number, userId: number, cardInfo: any): Promise<any> => {
  const {
    topic,
    question,
    answer
  } = cardInfo
  try {
    return await pool.query('UPDATE cards SET question = $1, answer = $2 WHERE  card_id = $3 AND user_id = $4 ', [question, answer, cardId, userId])
  } catch (error) {
    return error
  }
}
