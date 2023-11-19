import express from 'express'
import notFoundErrorHandler from './common/notFoundErrorHandler.js'

const app = express()

app.get('/', (_req, res) => {
   res.send('Hello Word!')
})

app.use(notFoundErrorHandler)

export default app
