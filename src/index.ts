if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set')
}

import app from './app.js'
import prisma from './common/prismaClientSingleton.js'

const PORT = process.env.PORT || 3000

try {
    app.listen(PORT, () => console.log('http://localhost:' + PORT))
} catch (error) {
    console.log(error)
    prisma.$disconnect()
}
