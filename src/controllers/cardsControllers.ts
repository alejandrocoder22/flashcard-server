import * as cardsServices from '../services/cardsServices'
import express from 'express'
export const getAllPublicCardsController: any = async (_req: any, res: express.Response) => {
  console.log('hgi')
  try {
    const publicCards = await cardsServices.getAllPublicCards()
    res.status(200).send(publicCards.rows)
  } catch (error) {
    res.status(400).send({ message: 'Something went wrong', error })
  }
}

export const createCardController = async (_req: any, res: express.Response) => {
  try {
    await cardsServices.createCard()
    res.status(200).send({ message: 'Card created' })
  } catch (error) {
    res.status(400).send({ message: 'Something went wrong', error })
  }
}
