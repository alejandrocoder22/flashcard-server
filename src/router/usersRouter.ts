import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send('Hi! I am working')
})

export default router
