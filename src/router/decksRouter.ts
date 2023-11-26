import { Router } from 'express'
import { createDeck, deleteDeck, getDecksByUserId, getPublicDecksByTopic, updateDeck } from '../controllers/decksControllers'
import { validateUser } from '../middlewares/validateUser'

const router = Router()

// @/api/decks
router.post('/', validateUser, createDeck)
router.get('/', validateUser, getPublicDecksByTopic)
router.get('/:pagination', validateUser, getDecksByUserId)
router.delete('/:deckId', validateUser, deleteDeck)
router.put('/:deckId', validateUser, updateDeck)

export default router
