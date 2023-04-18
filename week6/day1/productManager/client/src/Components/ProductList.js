import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const ProductList = (props) => {

    const { productList, setProductList } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then((res => {
                console.log(res.data);
                setProductList(res.data);
            }))
            .catch((err) => console.log(err));
    }, [setProductList])

    const deleteOneProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${productId}`)
        .then(res => {
            console.log(res.data);
            setProductList(productList.filter((productRemove) => productRemove._id !== productId))
        })
        
        .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>All Products:</h1>
            {
                productList.map((product) => (
                    <div key={product._id}>
                        <Link className='productTitle' to={`/product/${product._id}`}><br/>{product.title}</Link><br />
                        <br />
                        <Link className='editBtn' to={`/product/edit/${product._id}`}>Edit</Link>
                        <button className='deleteBtn' onClick={() => deleteOneProduct(product._id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
}

export default ProductList;
