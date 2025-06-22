import { PrismaClient } from '../../generated/prisma'
const prisma = new PrismaClient()

export const registerUser = async (cpf: string, senha: string) => {
  const existing = await prisma.usuario.findUnique({ where: { cpf } })
  if (existing) {
    throw new Error('CPF já cadastrado')
  }
  return await prisma.usuario.create({ data: { cpf, senha, tipo: 'usuario' } })
}

export const loginUser = async (cpf: string, senha: string) => {
  const user = await prisma.usuario.findUnique({ where: { cpf } })
  if (!user || user.senha !== senha) {
    throw new Error('CPF ou senha inválidos')
  }
  return user
}
