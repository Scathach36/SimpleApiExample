import express from 'express'
import userRouter from './router/userRouter.js'

const app = express()

app.use('/api', userRouter)

app.listen(80, () => {
    console.log('Server running at http://127.0.0.1')
})