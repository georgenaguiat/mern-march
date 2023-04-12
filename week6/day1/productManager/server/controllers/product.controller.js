const Product = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProduct) => {
            res.json(allProduct);
        })
        .catch(err => {
            res.status(400).json(err)
        });
}

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.json(newProduct);
        })
        .catch(err => {
            res.status(400).json(err)
        });
}