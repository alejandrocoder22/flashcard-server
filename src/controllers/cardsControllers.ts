import * as cardsServices from '../services/cardsServices'
import express from 'express'
export const getAllPublicCardsController: any = async (_req: any, res: express.Response) => {
  try {
    const publicCards = await cardsServices.getAllPublicCards()
    res.status(200).send(publicCards)
  } catch (error) {
    res.status(400).send({ message: 'Something went wrong', error })
  }
}
