import express, { json } from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import  router  from './Routes/index'
import parser from 'body-parser'
import {sequelizeConnect} from './config/dbconfig'
const app = express()




app.use(parser.json())
const { PORT }= process.env
app.use(morgan('tiny'))
app.use(helmet())
app.listen(PORT, console.log("APP IS RUNNING ON PORT ", PORT))
sequelizeConnect()
app.use('/', router)