import { Router } from 'express'
import { createCardController, getAllPublicCardsController, getCardsByIdController } from '../controllers/cardsControllers'

const router = Router()

// @/api/users

router.get('/', getAllPublicCardsController)
router.get('/cardsUser', getCardsByIdController)
router.post('/', createCardController)

export default router
