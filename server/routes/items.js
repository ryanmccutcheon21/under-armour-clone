import express from 'express'

import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/', getItems)
router.post('/', auth, addItems)
router.patch('/:id', auth, updateCart)
router.delete('/:id', auth, deleteItem)

export default router