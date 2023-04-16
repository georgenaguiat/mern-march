import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {

    const [productDetail, setProductDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                console.log(res.data);
                setProductDetail(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <h2>{productDetail.title}</h2>
            <p>Price: {productDetail.price}</p>
            <p>Description: {productDetail.description}</p>
        </div>
    );
}

export default ProductDetail;
