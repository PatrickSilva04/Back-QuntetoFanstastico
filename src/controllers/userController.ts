import { Request, Response } from 'express'
import * as userService from '../Services/userService'

export const registerUser = async (req: Request, res: Response) => {
  const { cpf, senha } = req.body
  if (!cpf || !senha) {
    return res.status(400).json({ error: 'CPF e senha são obrigatórios' })
  }
  try {
    const user = await userService.registerUser(cpf, senha)
    const { senha: _, ...userData } = user
    return res.status(201).json(userData)
  } catch (error: any) {
    return res.status(400).json({ error: error.message })
  }
}

export const loginUser = async (req: Request, res: Response) => {
  const { cpf, senha } = req.body
  if (!cpf || !senha) {
    return res.status(400).json({ error: 'CPF e senha são obrigatórios' })
  }
  try {
    await userService.loginUser(cpf, senha)
    return res.status(200).json({ message: 'Login realizado com sucesso' })
  } catch (error: any) {
    return res.status(401).json({ error: error.message })
  }
}
