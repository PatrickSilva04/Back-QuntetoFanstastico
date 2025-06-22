
import cors from 'cors'
import express from 'express'
import userRoutes from './routes/userRoutes'
import rechargeRoutes from './routes/rechargeRoutes'

const app = express();


app.use(express.json())


app.use(express.urlencoded({extended: true}))

app.use(cors())


app.use('/api', userRoutes)
app.use('/api', rechargeRoutes)

export default app;