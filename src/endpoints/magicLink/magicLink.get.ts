import { Request, Response } from 'express'

export function index(req: Request, res: Response) {
  return Promise.resolve('maybe I will return a magic link here...')
    .then(whatever => res.status(200).send(whatever))
    .catch(error => res.boom.badRequest(error))
}
