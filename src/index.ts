import express from 'express'
import usersRouter from './router/usersRouter'
import cardRouter from './router/cardsRouter'

const app = express()

app.use('/api/users', usersRouter)
app.use('/api/cards', cardRouter)

app.listen(3001, () => {
  console.log('Listening on port 3001')
})
