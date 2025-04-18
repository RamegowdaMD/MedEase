import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectdb from './config/Mongodb.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';

const app = express();
const port = process.env.PORT || 4000;

//middleware

app.use(cors());
app.use(express.json());
connectdb();

// api endpoints 
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);

app.get('/',(req,res)=>
{
    res.send('Api is working');
    
});

app.listen(port ,()=> console.log(`Server is running on port ${port}`));

export default app;