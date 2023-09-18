import { Router } from 'express'
import { createCardController, deleteCardController, getAllPublicCardsController, getCardsByIdController } from '../controllers/cardsControllers'

const router = Router()

// @/api/users

router.get('/', getAllPublicCardsController)
router.get('/cardsUser', getCardsByIdController)
router.post('/', createCardController)
router.delete('/', deleteCardController)

export default router
