import express from 'express'
import notFoundErrorHandler from './common/notFoundErrorHandler.js'
import usersRouter from './users/users.router.js'

const app = express()

app.get('/', (_req, res) => {
   res.send('Hello Word!')
})

app.use('/users', usersRouter)

app.use(notFoundErrorHandler)

export default app
