import { LinhaOnibus, PrismaClient } from '../../generated/prisma'

const prisma = new PrismaClient()

export const getAllLinhas = async (filtros: Partial<LinhaOnibus>) => {
  return await prisma.linhaOnibus.findMany({
    where: {
      ...(filtros.categoria && { categoria: filtros.categoria }),
      ...(filtros.tipo && { tipo: filtros.tipo }),
      ...(filtros.abrangencia && { abrangencia: filtros.abrangencia })
    }
  })
}

export const getLinhaById = async (id: number) => {
  return await prisma.linhaOnibus.findUnique({ where: { id } })
}

export const createLinha = async (data: Omit<LinhaOnibus, 'id'>) => {
  return await prisma.linhaOnibus.create({ data })
}

export const updateLinha = async (id: number, data: Partial<LinhaOnibus>) => {
  return await prisma.linhaOnibus.update({ where: { id }, data })
}

export const deleteLinha = async (id: number) => {
  return await prisma.linhaOnibus.delete({ where: { id } })
}
