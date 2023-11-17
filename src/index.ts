import express from 'express'

const PORT = 3000
const app = express()

app.get('/', (_req, res) => {
   res.send('Hello Word!') 
})

app.listen(PORT, () => {
    console.log('localhost:' + PORT)
})
