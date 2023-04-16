import { useState } from 'react';
import axios from 'axios';
import '../Components/ProductForm.css';

const ProductForm = (props) => {

    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    })

    const {productList, setProductList} = props;

    const changeHandler = (e) => {
        setProduct({...product, [e.target.name]: e.target.value});
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', product)
        .then(res => {
            console.log(res);
            console.log(res.data);
            setProduct([...product, res.data]);
            setProductList([...productList, res.data]);
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
                <input type="text" name="title" className='inputBox fieldBox' onChange={changeHandler} />
                <br />
            </p>
            <p className='field'>
                <label>Price</label>
                <input type="number" name="price" className='inputBox fieldBox' onChange={changeHandler} />
                <br />
            </p>
            <p className='field'>
                <label>Description</label>
                <input type="text" name="description" className='inputBox' onChange={changeHandler} />
                <br />
            </p>
            <input className='createBtn' type="submit" value="Create" />
        </form>
    );
}

export default ProductForm;
