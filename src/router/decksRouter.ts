import { Router } from 'express'
import { createDeck, getDecksByUserId, getPublicDecksByTopic } from '../controllers/decksControllers'
import { validateUser } from '../middlewares/validateUser'

const router = Router()

// @/api/decks
router.post('/', validateUser, createDeck)
router.get('/', validateUser, getPublicDecksByTopic)
router.get('/:pagination', validateUser, getDecksByUserId)

export default router
