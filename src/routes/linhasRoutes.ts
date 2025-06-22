import { Router, Request, Response } from 'express'
import {
  getAllLinhas,
  createLinha,
  updateLinha,
  deleteLinha
} from '../controllers/linhasController'

const router = Router()

router.get('/linhas', getAllLinhas)
router.post('/linhas', createLinha)
router.put('/linhas/:id', updateLinha)
router.delete('/linhas/:id', deleteLinha)

export default router
