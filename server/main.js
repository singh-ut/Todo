import cors from "cors";
import express from 'express';
import todoRouter from "./routes/todoRoute.js";
import dotenv from 'dotenv';
import { errorHandler } from './middlewares/errorMiddleware.js';
import connectDB from './config/db.config.js';
dotenv.config();
const app = express();

app.use(cors('https://todo-frontend-k3ag.onrender.com'))

connectDB();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8080;

// BODY PARSER MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the TODO API'
    })
})
app.use('/api/todos', todoRouter);

// ERROR HANDLER MIDDLEWARE
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is listening on: ${PORT}`);
});