import { Router } from 'express'
import { createUser, loginUser, verifyUser, deleteUser } from '../controllers/usersControllers'
import { validateUser } from '../middlewares/validateUser'

const router = Router()

// @/api/users

router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/verify', verifyUser)
router.delete('/', validateUser, deleteUser)

export default router
