import express from 'express'
import morgan from 'morgan'
import paymentsRoutes from './routes/payments.routes.js'
import { PORT } from './config.js'
import path from 'path'

const app = express()

app.use(morgan('dev'))

app.use(paymentsRoutes)

app.use(express.static(path.resolve('src/public')))

app.listen(PORT)
console.log('Server on port',PORT)