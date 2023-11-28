import { createDeckService, deleteDeckService, getDeckById, getDeckByIdService, getPublicDecksByTopicService, getPublicDecksByUserId, updateDeckService } from '../services/decksServices'

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

export const getDeckAndCardsById = async (req: any,res: any) => {
  const {deckId} = req.params

  
  try {
    const deck = await getDeckByIdService(deckId, req.user.userId)


    res.status(200).send(deck.rows)
    
  } catch (error) {
    res.status(400).send({message: 'Something went wrong', error})
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
  const { deckId } = req.params
  try {
    const deck = await getDeckById(deckId)

    if (deck.rows.length === 0) res.status(400).send({ message: 'You must provide a deck id' })
    if (deck.rows[0].user_id !== req.user.userId) res.status(400).send({ message: 'You can only add cards to your own deck' })

    await deleteDeckService(deckId)

    res.status(200).send({ message: 'Deck deleted' })
  } catch (error) {
    res.status(400).send({ error })
  }
}

export const updateDeck = async (req: any, res: any): Promise<void> => {
  const { deckId } = req.params
  const { topic, deckName, isPublic } = req.body
  try {
    await updateDeckService(topic, deckName, isPublic, deckId, req.user.userId)
    res.status(200).send({ message: 'Deck deleted' })
  } catch (error) {
    res.status(400).send({ error })
  }
}
