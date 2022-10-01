import express, { urlencoded } from "express"
import { config } from "dotenv";
import router from './routes/router.js'
import cors from 'cors'


config({path:"./config/config.env"})


export const app = express();



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',router)

app.get('/api/getkey',(req,res)=>res.status(200).json({key:process.env.API_KEY}))