const Product = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProduct) => {
            res.json(allProduct);
        })
        .catch(err => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.json(newProduct);
        })
        .catch(err => {
            res.json({ message: 'Something went wrong', error: err })
        });
}