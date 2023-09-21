import bcrypt from 'bcrypt'

export const hashPassword = async (password: string) => {
  const saltRounds = 10
  const hashedPassword = await bcrypt.hash(password, saltRounds)
  return hashedPassword
}

export const checkPassword = async (plainPassword: string, hashedPassword: string) => {
  const isPasswordRight = await bcrypt.compare(plainPassword, hashedPassword)
  return isPasswordRight
}
