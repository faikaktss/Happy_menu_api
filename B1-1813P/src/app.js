import express from 'express';
import dotenv from 'dotenv';
import router from './routes/categoryRoutes';
import  categoryRoutes from './routes/categoryRoutes';
import productRoutes from './routes/productRoutes';
import ingredientsRoutes from './routes/ingredientsRoutes';

dotenv.config();

const app = express();
const PORT = process.env.DB_PORT || 5000;

app.use(express.json());

app.use('/api/v1/categories',categoryRoutes)
app.use('/api/v1/products',productRoutes)
app.use('/api/v1/products',ingredientsRoutes)

app.listen('/',()=>{
    console.log('Sunucu ayağa kalktii')
})