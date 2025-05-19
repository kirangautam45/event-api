import { Schema, model, Document, Types } from 'mongoose'

export interface IEvent extends Document {
  title: string
  description: string
  date: Date
  location: string
  userId: Types.ObjectId
}

const EventSchema = new Schema<IEvent>(
  {
    title: String,
    description: String,
    date: Date,
    location: String,
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
)

export default model<IEvent>('Event', EventSchema)
