import * as cardsServices from '../services/cardsServices'
import express from 'express'

// @/api/cards
export const getAllPublicCardsController: any = async (_req: any, res: express.Response) => {
  try {
    const publicCards = await cardsServices.getAllPublicCards()
    res.status(200).send(publicCards.rows)
  } catch (error) {
    res.status(400).send({ message: 'Something went wrong', error })
  }
}

export const getCardsByIdController: any = async (req: express.Request, res: express.Response) => {
  const { userId } = req.body // Change after to get id from Cookies
  try {
    const cardsById = await cardsServices.getCardsById(userId)
    res.status(200).send(cardsById.rows)
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


export const deleteCardController = async (_req,res: express.Response) => {
  res.send('Deleted Card')
}

export const updateCardController = async (_req,res: express.Response) => {
  res.send('Update Card')
}