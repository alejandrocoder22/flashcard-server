import 'dotenv/config'
import express from 'express'
import usersRouter from './router/usersRouter'
import cardRouter from './router/cardsRouter'

const app = express()

app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/cards', cardRouter)

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${Number(process.env.PORT)}`)
})
