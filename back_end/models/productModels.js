import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    size: { type: Array },
    poster: { type: Array },
    name: { type: String },
    price: { type: Number },
    numberReviews: { type: Number },
    rating: { type: Number },
    sex: { type: String },
    color: { type: String },
    collections: { type: String },
    productType: { type: String },
    description: { type: String },
    key: { type: String },
    NSX: { type: String },
    createAt: { type: Date, default: Date.now },
},
)

const Product = mongoose.model('product', ProductSchema, 'product');

export default Product;

