import { Schema, model, Document } from 'mongoose'

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export interface IUser extends Document {
  _id: string
  name: string
  email: string
  password: string
  role: UserRole
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.USER,
    },
  },
  { timestamps: true }
)

export default model<IUser>('User', UserSchema)
