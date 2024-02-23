import { Router } from 'express'
import { getCanciones, postCanciones } from '../src/controllers/cancionesControllers.js'

const router = Router()

router.get('/canciones', getCanciones)
router.post('/canciones', postCanciones)

export default router
