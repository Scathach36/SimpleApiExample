import express from 'express'

import { getAllUser } from '../controller/userController.js'

const router = new express.Router()

router.get('/getalluser', getAllUser)

export default router