import express from 'express';
import mongoose from 'mongoose'
import userRouter from './Routes/UserRouter.js';
import productRouter from './Routes/ProductRouter.js';
import dotenv from 'dotenv';

dotenv.config();



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MOnGODB_URL || 'mongodb://localhost/book_shop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});




app.use('/api/users', userRouter);
app.use('/api/product', productRouter);



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})