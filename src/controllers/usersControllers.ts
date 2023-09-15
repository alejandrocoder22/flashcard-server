
import express from 'express'
import { pool } from '../database/database'

export const createUser: any = async (_req: any, res: express.Response) => {
  const cards = await pool.query('SELECT * FROM cards')

  res.status(200).send(cards)
}
