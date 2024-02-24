import { Router } from 'express'
import { getCanciones, postCanciones, deleteCanciones } from '../src/controllers/cancionesControllers.js'

const router = Router()

router.get('/canciones', getCanciones)
router.post('/canciones', postCanciones)
router.delete('/canciones', deleteCanciones)

export default router
