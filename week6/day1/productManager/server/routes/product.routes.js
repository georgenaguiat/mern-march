const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/product', ProductController.findAllProducts);
    app.post('/api/createProduct', ProductController.createNewProduct);
    app.get('/api/product/:id', ProductController.getProduct);
    app.put('/api/editProduct/:id', ProductController.updateProduct);
    app.delete('/api/deleteProduct/:id', ProductController.deleteProduct);
}