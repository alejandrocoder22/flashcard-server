import { pool } from '../database/database'

export const createDeckService = async (topic: string, deckName: string, isPublic: boolean, userId: number): Promise<any> => {
  return await pool.query('INSERT INTO decks (topic, deck_name, is_public, user_id) VALUES ($1, $2, $3, $4)', [topic, deckName, isPublic, userId])
}

