import { Router } from 'express'
import { createUser } from '../controllers/usersControllers'

const router = Router()

router.post('/', createUser)

export default router
