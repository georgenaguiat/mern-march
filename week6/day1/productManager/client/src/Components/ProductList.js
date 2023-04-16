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
    }, [])


    return (
        <div>
            <h1>All Products:</h1>
            {
                productList.map((product, idx) => (
                    <div key={idx}>
                        <Link to={`/product/${product._id}`}><br/>{product.title}</Link>
                    </div>
                ))
            }
        </div>
    );
}

export default ProductList;
