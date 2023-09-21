
import express from 'express'
import { userExist } from '../services/usersServices'
import { hashPassword } from '../utils/crypto'

export const createUser: any = async (req: express.Request, res: express.Response) => {
  const { username, email, password } = req.body

  try {
    const user = await userExist(username, email)
    if (user.length > 0) {
      res.status(200).send({ message: 'User or email already exist', password: hashedPassword })
    }
    const hashedPassword = await hashPassword(password)
    createUser(username, hashedPassword, email)
    res.status(200).send({ message: 'User created' })
  } catch (error) {
    res.status(400).send('error')
  }
}

export const loginUser = (_req: express.Request, res: express.Response) => {
  res.send('User Logged in')
}

export const verifyUser = (_req: express.Request, res: express.Response) => {
  res.send('User verified')
}
