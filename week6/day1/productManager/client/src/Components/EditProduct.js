import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import '../App.css';

const EditProduct = () => {

    const [editOneProduct, setEditOneProduct] = useState({
        title: "",
        price: "",
        description: ""
    })

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res.data);
                setEditOneProduct(res.data);
            })
            .catch(err => console.log(err))
    }, [id])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/editProduct/${id}`, editOneProduct)
            .then(res => {
                console.log(res.data);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    const onChangeHandler = (e) => {
        setEditOneProduct({ ...editOneProduct, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <h1>Edit Product</h1>
            <form onSubmit={updateProduct}>
                <p className='field'>
                    <label>Title</label>
                    <input type="text" name="title" className='inputBox fieldBox' value={editOneProduct.title} onChange={onChangeHandler} />
                    <br />
                </p>
                <p className='field'>
                    <label>Price</label>
                    <input type="number" name="price" className='inputBox fieldBox' value={editOneProduct.price} onChange={onChangeHandler} />
                    <br />
                </p>
                <p className='field'>
                    <label>Description</label>
                    <input type="text" name="description" className='inputBox' value={editOneProduct.description} onChange={onChangeHandler} />
                    <br />
                </p>
                <input className='btn' type="submit" value="Update" />
            </form>
        </div>
    );
}

export default EditProduct;
