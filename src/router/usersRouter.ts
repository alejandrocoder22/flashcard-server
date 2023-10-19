import { Router } from 'express'
import { createUser, loginUser, verifyUser, deleteUser } from '../controllers/usersControllers'

const router = Router()

// @/api/users

router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/verify', verifyUser)
router.delete('/', deleteUser)

export default router
