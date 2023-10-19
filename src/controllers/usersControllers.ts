
import express from 'express'
import { userExist, createUserService, deleteUserService } from '../services/usersServices'
import { checkPassword, generateToken, hashPassword } from '../utils/crypto'

export const createUser = async (req: express.Request, res: express.Response) => {
  const { username, email, password } = req.body
  try {
    const user = await userExist(username, email)
    if (user.length > 0) {
      return res.status(400).send({ message: 'User or email already exist' })
    }
    const hashedPassword = await hashPassword(password)
    const createdUser: any = await createUserService(username, email, hashedPassword)
    if (createdUser.rows.length > 0) res.status(200).send({ message: 'User created' })
  } catch (error) {
    res.status(400).send(error)
  }
}

export const loginUser: any = async (req: express.Request, res: express.Response) => {
  const { username, email, password } = req.body

  try {
    const user: any = await userExist(username, email)

    if (user.length === 0) return res.status(400).send({ message: 'Invalid username or password' })

    const isPasswordRight = await checkPassword(password, user[0].password)
    if (!isPasswordRight) return res.status(400).send({ message: 'Invalid username or password ' })
    await generateToken(user[0].user_id, user[0].username, res)
    res.status(200).send({ message: 'User is logged in' })
  } catch (error) {
    res.status(400).send({ message: 'Invalid Username or Password', error })
  }
}

export const deleteUser: any = async (req: express.Request, res: express.Response) => {
  const { userId } = req.cookies

  try {
    if (userId.length > 0) {
      await deleteUserService(userId)
      res.status(200).send({ message: 'User deleted' })
    }
  } catch (error) {
    res.status(404).send({ message: 'Error deleting user' })
  }
}

export const verifyUser = (_req: express.Request, res: express.Response): void => {
  res.send('User verified')
}
