import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    orderItem: [{}]
},
)

const Product = mongoose.model('product', orderSchema, 'product');

export default Product;

