import { pool } from '../database/database'

export const createDeckService = async (topic: string, deckName: string, isPublic: boolean, userId: number): Promise<any> => {
  return await pool.query('INSERT INTO decks (topic, deck_name, is_public, user_id) VALUES ($1, $2, $3, $4)', [topic, deckName, isPublic, userId])
}

const getPagination = (page: number): number => {
  if (Number(page) === 0) {
    return 0
  } else {
    return page * 10 - 1
  }
}
export const getPublicDecksByTopicService = async (pagination: number, topic: string): Promise<any> => {
  console.log(topic, pagination)
  return await pool.query(`
SELECT * FROM decks 
WHERE is_public = true 
AND topic = $1
OFFSET ${getPagination(pagination)}
LIMIT 10`, [topic]
  )
}

export const getPublicDecksByUserId = async (userId: number, pagination: number): Promise<any> => {
  return await pool.query(`
SELECT * FROM decks 
WHERE user_id = $1
OFFSET ${getPagination(pagination)}
LIMIT 10`, [userId]
  )
}

export const getDeckById = async (deckId: number) => {
  return await pool.query('SELECT user_id FROM decks WHERE deck_id=$1', [deckId])
}

export const deleteDeckService = async (deckId) => {
  return await pool.query('DELETE FROM decks WHERE deck_id = $1', [])
}
