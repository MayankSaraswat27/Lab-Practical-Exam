import express from "express";
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes';

const app = express();

app.use(express.json());

connectDB();

app.use('/', productRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});