import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const hashPassword = async (password: string) => {
  const saltRounds = 10
  const hashedPassword = await bcrypt.hash(password, saltRounds)
  return hashedPassword
}

export const checkPassword = async (plainPassword: string, hashedPassword: string) => {
  const isPasswordRight = await bcrypt.compare(plainPassword, hashedPassword)
  return isPasswordRight
}

export const generateToken = async (userId: number, username: string) => {
  const userData = { userId, username }
  return jwt.sign(userData, String(process.env.JWT_PASSWORD))
}
