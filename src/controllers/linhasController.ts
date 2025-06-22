import { Request, Response } from 'express'
import * as linhasService from '../Services/linhasService'

export const getAllLinhas = async (req: Request, res: Response) => {
  try {
    const filtros = {
      categoria: req.query.categoria as string,
      tipo: req.query.tipo as string,
      abrangencia: req.query.abrangencia as string
    }
    const linhas = await linhasService.getAllLinhas(filtros)
    res.status(200).json(linhas)
  } catch {
    res.status(500).json({ error: 'Erro ao buscar linhas' })
  }
}


export const createLinha = async (req: Request, res: Response) => {
  try {
    const nova = await linhasService.createLinha(req.body)
    res.status(201).json(nova)
  } catch {
    res.status(500).json({ error: 'Erro ao criar linha' })
  }
}

export const updateLinha = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  try {
    const atualizada = await linhasService.updateLinha(id, req.body)
    res.status(200).json(atualizada)
  } catch {
    res.status(500).json({ error: 'Erro ao atualizar linha' })
  }
}

export const deleteLinha = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  try {
    await linhasService.deleteLinha(id)
    res.status(200).json({ message: 'Linha excluída com sucesso' })
  } catch {
    res.status(500).json({ error: 'Erro ao excluir linha' })
  }
}
