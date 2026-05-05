import express from "express";
import connectDB from './src/config/db.js';
import productRoutes from './src/routes/productRoute.js';

const app = express();

app.use(express.json());

connectDB();

app.use('/', productRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});