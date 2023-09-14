import express from 'express'
import usersRouter from './router/usersRouter'
import cardRouter from './router/cardsRouter'
import 'dotenv/config'

const app = express()

app.use('/api/users', usersRouter)
app.use('/api/cards', cardRouter)

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})
