import { Router } from 'express'
import { createUser } from '../controllers/usersControllers'

const router = Router()

router.get('/', createUser)

export default router
