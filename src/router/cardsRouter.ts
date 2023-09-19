import { Router } from 'express'
import { createCardController, deleteCardController, getAllPublicCardsController, getCardsByIdController, updateCardController } from '../controllers/cardsControllers'

const router = Router()

// @/api/cards

router.get('/', getAllPublicCardsController)
router.get('/cardsUser', getCardsByIdController)
router.post('/', createCardController)
router.delete('/', deleteCardController)
router.put('/', updateCardController)

export default router
