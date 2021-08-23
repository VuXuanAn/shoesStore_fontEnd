const products = require('../models/product')
import expressAsyncHandler from 'express-async-handler';

module.exports.index = expressAsyncHandler(async (req, res) => {
    var product = await products.find();
    res.json(product);
})
