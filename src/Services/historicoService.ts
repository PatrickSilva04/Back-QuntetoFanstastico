import { PrismaClient } from '../../generated/prisma'

const prisma = new PrismaClient()

export const getHistoricosByUserId = async (usuarioId: number) => {
  return await prisma.historicoPagamento.findMany({
    where: { usuarioId },
    orderBy: { data: 'desc' }
  })
}

export const createHistorico = async (usuarioId: number, valor: number, cartao: string) => {
  return await prisma.historicoPagamento.create({
    data: {
      usuarioId,
      valor,
      cartao,
      data: new Date()
    }
  })
}
