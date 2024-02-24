import { Router } from 'express'
import { getCanciones, postCanciones, deleteCanciones, putCanciones } from '../src/controllers/cancionesControllers.js'

const router = Router()

router.get('/canciones', getCanciones)
router.post('/canciones', postCanciones)
router.delete('/canciones/:id', deleteCanciones)
router.put('/canciones/:id', putCanciones)

export default router
