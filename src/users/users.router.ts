import { Router } from 'express'

import * as usersController from './users.controller.js'

export default Router()
   .get('/', usersController.index)
   // .get('/:id', usersController.show)
   // .post('/', usersController.store)
   // .put('/:id', usersController.update)
   // .delete('/:id', usersController.destroy
