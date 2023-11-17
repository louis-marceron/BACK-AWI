import app from './app'

const PORT = process.env.NODE_ENV || 3000

app.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
})
