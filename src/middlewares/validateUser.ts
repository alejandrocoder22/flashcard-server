import express from 'express'
import jwt from 'jsonwebtoken'
export const validateUser = (req: any, res: express.Response, next: express.NextFunction) => {
  let token: string

  token = req.cookies.jwt

  if (token) {
    const secret: string | undefined = process.env.JWT_PASSWORD
    /* @ts-expect-error */
    const tokenDecoded = jwt.decode(token, secret)
    if (tokenDecoded === null) return res.status(400).send({ message: 'User must be logged in' })

    req.user = tokenDecoded

    next()
  } else {
    res.status(401).send({ message: 'You must be logged in' })
  }
}
