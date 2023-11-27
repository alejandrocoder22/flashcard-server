import express from 'express'
import * as cardsServices from '../services/cardsServices'
import { getDeckById } from '../services/decksServices'
import { updateDeck } from './decksControllers'

// @/api/cards

export const createCardController = async (req: any, res: express.Response): Promise<any> => {
  const { question, answer, deckId } = req.body

  try {
    const deck = await getDeckById(deckId)

    if (deck.rows.length === 0) return res.status(400).send({ message: 'You must provide a deck id' })
    if (deck.rows[0].user_id !== req.user.userId) return res.status(400).send({ message: 'You can only add cards to your own deck' })

    await cardsServices.createCard(question, answer, deckId, req.user.userId)
    res.status(200).send({ message: 'Card created' })
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

export const deleteCardController = async (req: any, res: express.Response): Promise<any> => {
  const { cardId } = req.params
  try {
    await cardsServices.deleteCard(req.user.userId, cardId)
    return res.status(200).send({ message: 'Card deleted' })
  } catch (error) {
    return res.status(400).send({ message: 'Something went wrong' })
  }
}

export const updateCardController = async (req: any, res: express.Response): Promise<any> => {
  const { cardId } = req.params

  const cardInfo = {
    question: req.body.question,
    answer: req.body.answer
  }

  try {
    const updatedCard = await cardsServices.updateCard(cardId, req.user.userId, cardInfo)

    if (updatedCard.rows.length === 0) return res.status(400).send({ message: 'There is not a card with such id' })

    return res.status(200).send({ message: 'Card updated' })
  } catch (error) {
    return res.status(400).send({ message: 'Something went wrong' })
  }
}
