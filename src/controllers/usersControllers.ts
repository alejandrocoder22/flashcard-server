
import express from 'express'
import { pool } from '../database/database'
import { userExist } from '../services/usersServices'

export const createUser: any = async (req: express.Request, res: express.Response) => {
  const { username, email } = req.body

  try {
    const user = await userExist(username, email)
    if (user.length > 0) {
      res.status(200).send({message: 'User or email already exist'})
    }

    

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
