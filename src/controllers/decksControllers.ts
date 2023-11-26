// Get decks by topic x
// Get decks by userId x
// Create Deck x
// Delete Deck
// Update Deck

import { createDeckService, getPublicDecksByTopicService, getPublicDecksByUserId } from '../services/decksServices'

export const createDeck = async (req: any, res: any): Promise<void> => {
  const { topic, deckName, isPublic } = req.body
  const { userId } = req.user
  try {
    await createDeckService(topic, deckName, isPublic, userId)
    res.status(200).send({ message: 'Deck created' })
  } catch (error) {
    res.status(400).send({ message: 'Something went wrong', error })
  }
}

export const getPublicDecksByTopic = async (req: any, res: any): Promise<void> => {
  const pagination = req.query.pagination
  const topic = req.query.topic

  try {
    const decks = await getPublicDecksByTopicService(pagination, topic)
    res.status(200).send({ decks: decks.rows })
  } catch (error) {
    res.status(400).send({ error })
  }
}

export const getDecksByUserId = async (req: any, res: any): Promise<void> => {
  const { pagination } = req.params
  try {
    const decks = await getPublicDecksByUserId(req.user.userId, pagination)
    res.status(200).send({ decks: decks.rows })
  } catch (error) {
    res.status(400).send({ error })
  }
}

export const deleteDeck = async (req: any, res: any): Promise<void> => {
  try {
    const decks = await getPublicDecksByUserId(req.user.userId, pagination)
    res.status(200).send({ decks: decks.rows })
  } catch (error) {
    res.status(400).send({ error })
  }
}
