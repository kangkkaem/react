import React, { useState } from 'react'
import ProductInset from './ProductInset'
import ProductList from './ProductList';

const Product = () => {
    const [products, setProduct] = useState([
        {id:1, name:'냉장고', price:300, company:'삼성'},
        {id:2, name:'TV', price:200, company:'엘지'},
        {id:3, name:'세탁기', price:500, company:'아마존'},
        {id:4, name:'에어컨', price:250, company:'쿠팡'}
    ]);

const onInsert =() =>{
    const newProduct ={
        id:5,
        name: products.name,
        price:products.price,
        company:products.company
    }
    setProduct(products.concat(newProduct));
}

return (
    <div>
        <h1>상품관리</h1>
        <ProductInset onInsert={onInsert}/>
        <hr/>
        <ProductList products={products}/>
    </div>
    )
}

export default Product