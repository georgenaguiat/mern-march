import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = (props) => {

    const [productDetail, setProductDetail] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                console.log(res.data);
                setProductDetail(res.data);
            })
            .catch(err => console.log(err));
    }, [id])

    const deleteOneProduct = () => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
            .then(res => {
                console.log(res.data)
                setProductDetail(res.data);
                navigate('/');
            })

            .catch(err => console.log(err));

    }

    return (
        <div>
            <h1>Product Detail</h1>
            <h2>{productDetail.title}</h2>
            <p>Price: ${productDetail.price}</p>
            <p>Description: {productDetail.description}</p>
            <button className="btn" onClick={deleteOneProduct}>Delete</button>
        </div>
    );
}

export default ProductDetail;
