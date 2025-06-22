import { Router } from 'express'
import { getHistoricoByUsuarioId, createHistorico } from '../controllers/historicoController'

const router = Router()

router.get('/historico/:usuarioId', getHistoricoByUsuarioId)
router.post('/historico', createHistorico)

export default router
