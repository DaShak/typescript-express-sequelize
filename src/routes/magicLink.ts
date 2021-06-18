import { Express } from 'express'
import { MagicLinkController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/magicLink', MagicLinkController.MagicLinkIndex.index)

}
