import express from 'express'
import { getUser, editUser, getUserbyID, deleteUser } from '../controllers/userController.js'

const router = express.Router()

router.get('/',getUser)
router.get('/:id',getUserbyID)
router.delete('/:id',deleteUser)
router.put('/:id',editUser)

export default router