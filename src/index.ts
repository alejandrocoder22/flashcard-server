import express from 'express'
import usersRouter from './router/usersRouter'
const app = express()

app.use('/api/users', usersRouter)

app.listen(3001, () => {
  console.log('Listening on port 3001')
})
