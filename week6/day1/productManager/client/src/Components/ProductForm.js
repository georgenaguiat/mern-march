import { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {

    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: '',
    })

    const { productList, setProductList } = props;

    const changeHandler = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/createProduct', product)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setProductList([...productList, res.data]);
                setProduct({
                    title: '',
                    price: '',
                    description: '',
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <p className='field'>
                <label>Title</label>
                <input type="text" name="title" className='inputBox fieldBox' value={product.title} onChange={changeHandler} />
                <br />
            </p>
            <p className='field'>
                <label>Price</label>
                <input type="number" name="price" className='inputBox fieldBox' value={product.price} onChange={changeHandler} />
                <br />
            </p>
            <p className='field'>
                <label>Description</label>
                <input type="text" name="description" className='inputBox' value={product.description} onChange={changeHandler} />
                <br />
            </p>
            <input className='createBtn' type="submit" value="Create" />
        </form>
    );
}

export default ProductForm;
