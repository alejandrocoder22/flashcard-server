import { Router } from 'express'
import { createCardController, deleteCardController, getAllPublicCardsController, getCardsByIdController, updateCardController } from '../controllers/cardsControllers'
import { validateUser } from '../middlewares/validateUser'

const router = Router()

// @/api/cards

router.get('/', getAllPublicCardsController)
router.get('/cardsUser', validateUser, getCardsByIdController)
router.post('/', validateUser, createCardController)
router.delete('/:cardId', validateUser, deleteCardController)
router.put('/', validateUser, updateCardController)

export default router
