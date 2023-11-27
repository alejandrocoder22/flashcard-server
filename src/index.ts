import 'dotenv/config'
import express from 'express'
import usersRouter from './router/usersRouter'
import cardRouter from './router/cardsRouter'
import cookieParser from 'cookie-parser'
import deckRouter from './router/decksRouter'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use('/api/users', usersRouter)
app.use('/api/cards', cardRouter)
app.use('/api/decks', deckRouter)

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${Number(process.env.PORT)}`)
})
