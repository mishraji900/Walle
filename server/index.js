import  express  from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';

import WALLEroutes from './routes/WALLE.routes.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({liming:"150mb"}))
app.use('/api/v1/walle',WALLEroutes);
app.get('/',(req,res)=>{
    res.status(200).json({message:"Hello from WALL.E"})
})
app.listen(8080, ()=>console.log('server has started on 8080'))