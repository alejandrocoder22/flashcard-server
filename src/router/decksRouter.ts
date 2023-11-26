import { Router } from 'express'
import { createDeck, getPublicDecksByTopic } from '../controllers/decksControllers'
import { validateUser } from '../middlewares/validateUser'

const router = Router()

// @/api/decks
router.post('/', validateUser, createDeck)
router.get('/', validateUser, getPublicDecksByTopic)

export default router
