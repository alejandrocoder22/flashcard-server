import * as cardsServices from '../services/cardsServices'
import express from 'express'

// @/api/cards
export const getAllPublicCardsController = async (_req: any, res: express.Response): Promise<void> => {
  try {
    const publicCards = await cardsServices.getAllPublicCards()
    res.status(200).send(publicCards.rows)
  } catch (error) {
    res.status(400).send({ message: 'Something went wrong', error })
  }
}

export const getCardsByIdController = async (req: any, res: express.Response): Promise<void> => {
  try {
    const cardsById = await cardsServices.getCardsById(req.user.userId)
    res.status(200).send(cardsById.rows)
  } catch (error) {
    res.status(400).send({ message: 'Something went wrong', error })
  }
}

export const createCardController = async (req: any, res: express.Response): Promise<void> => {
  const { topic, question, answer, isPublic } = req.body

  const cardData = {
    topic,
    question,
    answer,
    user_id: req.user.userId,
    is_public: isPublic
  }
  try {
    await cardsServices.createCard(cardData)
    res.status(200).send({ message: 'Card created' })
  } catch (error) {
    res.status(400).send({ message: 'Something went wrong', error })
  }
}

export const deleteCardController = async (_req: express.Request, res: express.Response): Promise<void> => {
  res.send('Deleted Card')
}

export const updateCardController = async (_req: express.Request, res: express.Response): Promise<void> => {
  res.send('Update Card')
}
