import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import express from 'express'
export const hashPassword = async (password: string) => {
  const saltRounds = 10
  const hashedPassword = await bcrypt.hash(password, saltRounds)
  return hashedPassword
}

export const checkPassword = async (plainPassword: string, hashedPassword: string) => {
  const isPasswordRight = await bcrypt.compare(plainPassword, hashedPassword)
  return isPasswordRight
}

export const generateToken = async (userId: number, username: string, res: express.Resposne) => {
  const userData = { userId, username }

  const token = await jwt.sign(userData, String(process.env.JWT_PASSWORD))

  res.cookie('jwt', token, {
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000
  })
}
