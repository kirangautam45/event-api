import jwt, { SignOptions } from 'jsonwebtoken'
import { IUser } from '../models/userModel'
import { Document } from 'mongoose'

declare global {
  namespace Express {
    interface Request {
      user?: IUser & Document
      userId?: string
    }
  }
}

export type CustomJwtPayload = {
  userId: string
  email: string
  role: string
}

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret'
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '24h'

export const generateToken = (payload: CustomJwtPayload): string => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  } as SignOptions)
}

export const verifyToken = (token: string): CustomJwtPayload => {
  return jwt.verify(token, JWT_SECRET) as CustomJwtPayload
}
