// Get decks by topic
// Get decks by userId
// Create Deck
// Delete Deck
// Update Deck

import { createDeckService } from '../services/decksServices'

export const createDeck = async (req: any, res: any) => {
  const { topic, deckName, isPublic } = req.body
  const { userId } = req.user
  try {
    await createDeckService(topic, deckName, isPublic, userId)
    res.status(200).send({ message: 'Deck created' })
  } catch (error) {
    res.status(400).send({ message: 'Something went wrong', error })
  }
}
