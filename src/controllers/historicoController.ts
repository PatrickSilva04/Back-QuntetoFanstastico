import { Request, Response } from 'express'
import * as historicoService from '../Services/historicoService'

export const getHistoricoByUsuarioId = async (req: Request, res: Response) => {
  const usuarioId = Number(req.params.usuarioId)

  try {
    const historicos = await historicoService.getHistoricosByUserId(usuarioId)
    res.status(200).json(historicos)
  } catch (error: any) {
    res.status(500).json({ error: 'Erro ao buscar histórico de pagamentos' })
  }
}

export const createHistorico = async (req: Request, res: Response) => {
  const { usuarioId, valor, cartao } = req.body

  try {
    const novo = await historicoService.createHistorico(usuarioId, valor, cartao)
    res.status(201).json(novo)
  } catch (error: any) {
    res.status(500).json({ error: 'Erro ao criar histórico' })
  }
}
