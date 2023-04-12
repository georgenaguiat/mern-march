import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = (props) => {

    const [product, setProduction] = useState({
        title: "",
        price: "",
        description: ""
    })

    const changehandler = (e) => {
        setProduction({...product, [e.target.name]: e.target.value});
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', product)
        .then(res => {
            console.log(res);
            console.log(res.data.product);
            setProduction(res.data.name);
            setProduction({
                title: "",
                price: "",
                description: ""
            })
        })
        .catch((err) => {
            console.log(err.response.data.errors)
        })
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <p>
                <label>Title</label>
                <input type="text" name="title" id="" onChange={changehandler} />
                <br />
            </p>
            <p>
                <label>Price</label>
                <input type="number" name="price" onChange={changehandler} />
                <br />
            </p>
            <p>
                <label>Description</label>
                <input type="text" name="description" onChange={changehandler} />
                <br />
            </p>
            <input type="submit" value="Create" />
        </form>
    );
}

export default ProductForm;
