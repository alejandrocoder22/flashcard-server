import * as cardsServices from '../services/cardsServices'
import express from 'express'
import { getDeckById } from '../services/decksServices'

// @/api/cards

// POST new Card
// Update Card
// Delete Card
//

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
  const { question, answer, deckId } = req.body

  try {
    const deck = await getDeckById(deckId)

    if (deck.rows.length === 0) res.status(400).send({ message: 'You must provide a deck id' })
    if (deck.rows[0].user_id !== req.user.userId) res.status(400).send({ message: 'You can only add cards to your own deck' })

    await cardsServices.createCard(question, answer, deckId)
    res.status(200).send({ message: 'Card created' })
  } catch (error) {
    res.status(400).send({ message: 'Something went wrong', error })
  }
}

export const deleteCardController = async (req: any, res: express.Response): Promise<any> => {
  const { cardId } = req.body
  try {
    await cardsServices.deleteCard(req.user.userId, cardId)
    return res.status(200).send({ message: 'Card deleted' })
  } catch (error) {
    return res.status(400).send({ message: 'Something went wrong' })
  }
}

export const updateCardController = async (req: any, res: express.Response): Promise<any> => {
  const { cardId } = req.body

  const cardInfo = {
    topic: req.body.topic,
    question: req.body.question,
    answer: req.body.answer,
    is_public: req.body.is_public
  }

  try {
    const response = await cardsServices.updateCard(cardId, req.user.userId, cardInfo)
    return res.status(200).send({ message: 'Card updated' })
  } catch (error) {
    return res.status(400).send({ message: 'Something went wrong' })
  }
}
