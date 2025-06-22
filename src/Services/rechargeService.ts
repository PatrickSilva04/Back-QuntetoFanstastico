import { PrismaClient } from '../../generated/prisma'
const prisma = new PrismaClient()

export const createRecharge = async (userId: number, valor: number, tipo: string) => {
  return await prisma.recarga.create({
    data: {
      usuarioId: userId,
      valor,
      tipo
    }
  })
}
