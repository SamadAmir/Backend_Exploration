import express from 'express'
import { register } from '../controllers/userController.js'
import { getUser } from '../controllers/userController.js'
import { getUserbyID } from '../controllers/userController.js'
import { deleteUser } from '../controllers/userController.js'
import { editUser } from '../controllers/userController.js'

const router = express.Router()

router.post('/register',register)
router.get('/',getUser)
router.get('/:id',getUserbyID)
router.delete('/:id',deleteUser)
router.put('/:id',editUser)

export default router