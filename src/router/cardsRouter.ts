import { Router } from 'express'
import * as cardsControllers from '../controllers/cardsControllers'

const router = Router()

router.get('/', cardsControllers.getAllPublicCardsController)

export default router
