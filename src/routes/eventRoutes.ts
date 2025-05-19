import express from 'express'
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from '../controllers/eventController'
import { authenticate } from '../middleware/auth'

const router = express.Router()

// api/events?title=meeting&location=ny&sort=createdAt:asc&page=2&limit=5

router.get('/', authenticate, getEvents)
router.post('/', authenticate, createEvent)
router.put('/:id', authenticate, updateEvent)
router.delete('/:id', authenticate, deleteEvent)

export default router
