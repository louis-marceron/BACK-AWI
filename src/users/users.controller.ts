import { Request, Response, NextFunction } from 'express'
import prisma from '../common/prismaClientSingleton.js'

export const index = (_req: Request, res: Response, _next: NextFunction) => {
  const allUsers = prisma.user.findMany()
  res.json(allUsers)
}

// export const show = (_req: Request, res: Response, _next: NextFunction) => {
//    res.send('Hello Word!')
// }

// export const store = (_req: Request, res: Response, _next: NextFunction) => {
//    res.send('Hello Word!')
// }

// export const update = (_req: Request, res: Response, _next: NextFunction) => {
//    res.send('Hello Word!')
// }

// export const destroy = (_req: Request, res: Response, _next: NextFunction) => {
//    res.send('Hello Word!')
// }
