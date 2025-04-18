import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectdb from './config/Mongodb.js';
import userRouter from './routes/userRoute.js';

const app = express();
const port = process.env.PORT || 4000;

//middleware

app.use(cors());
app.use(express.json());
connectdb();

// api endpoints 
app.use('/api/user', userRouter);

app.get('/',(req,res)=>
{
    res.send('Api is working');
    
});

app.listen(port ,()=> console.log(`Server is running on port ${port}`));

export default app;