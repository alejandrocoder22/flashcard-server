import { Router } from 'express'
import { createCardController, getAllPublicCardsController } from '../controllers/cardsControllers'

const router = Router()

router.get('/', getAllPublicCardsController)
router.post('/', createCardController)

export default router
