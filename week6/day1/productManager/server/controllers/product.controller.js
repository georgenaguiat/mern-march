const Product = require('../models/product.model');

module.exports = {
    findAllProducts: (req, res) => {
        Product.find()
            .then((allProduct) => {
                res.json(allProduct);
            })
            .catch(err => {
                res.status(400).json(err)
            });
    },

    createNewProduct: (req, res) => {
        Product.create(req.body)
            .then(newProduct => {
                res.json(newProduct);
            })
            .catch(err => {
                res.status(400).json(err)
            });

    },
    getProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err));
    }
}