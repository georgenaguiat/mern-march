import { useState } from "react";
import ProductForm from "../Components/ProductForm";
import ProductList from "../Components/ProductList";

const Main = (props) => {

    const [productList, setProductList] = useState([]);

    return (
        <div>
            <ProductForm productList={productList} setProductList={setProductList} />
            <hr />
            <ProductList productList={productList} setProductList={setProductList} />
        </div>
    );
}

export default Main;
