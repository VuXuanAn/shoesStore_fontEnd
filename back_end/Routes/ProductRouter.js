import expressAsyncHandler from 'express-async-handler';
import Product from './../models/productModels.js';
import express from 'express';


const productRouter = express.Router();


// get all product 
productRouter.get('/', expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
}))

// get a product 
productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product not found ' });
    }
}))

export default productRouter;