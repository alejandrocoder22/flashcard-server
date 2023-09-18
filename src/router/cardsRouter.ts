import { Router } from 'express'
import { createCardController, deleteCardController, getAllPublicCardsController, getCardsByIdController, updateCardController } from '../controllers/cardsControllers'

const router = Router()

// @/api/users

router.get('/', getAllPublicCardsController)
router.get('/cardsUser', getCardsByIdController)
router.post('/', createCardController)
router.delete('/', deleteCardController)
router.update('/', updateCardController)

export default router
