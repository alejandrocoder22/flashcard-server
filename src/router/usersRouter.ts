import { Router } from 'express'
import { createUser, loginUser, verifyUser } from '../controllers/usersControllers'

const router = Router()

// @/api/users

router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/verify', verifyUser)

export default router
