import { Request, Response } from 'express'
import * as rechargeService from '../Services/rechargeService'

export const createRecharge = async (req: Request, res: Response) => {
  const { userId, valor, tipo } = req.body
  if (!userId || !valor || !tipo) {
    return res.status(400).json({ error: 'userId, valor e tipo são obrigatórios' })
  }
  try {
    const recarga = await rechargeService.createRecharge(userId, valor, tipo)
    return res.status(201).json(recarga)
  } catch (error: any) {
    return res.status(400).json({ error: error.message })
  }
}
