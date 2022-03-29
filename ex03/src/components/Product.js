import React, { useRef, useState } from 'react'
import ProductInsert from './ProductInsert';
import ProductList from './ProductList';
import './Student.css';

const Product = () => {
    const [products, setProducts]=useState([
        {id:1, name:'세탁기', price:200, company:'삼성'},
        {id:2, name:'냉장고', price:540, company:'엘지'},
        {id:3, name:'에어컨', price:300, company:'쿠팡'}
    ]);

    const refId=useRef(4);

    const onInsert = (product)=>{
        const newProduct={
            ...product,
            id: refId.current
        }
        setProducts(products.concat(newProduct));
        refId.current=refId.current+1;
    }

    const onDelete =(id)=>{
        setProducts(products.filter(p=> p.id !==id));
    }
  return (
    <div className='Student'>
        <ProductInsert onInsert={onInsert}/>
        <br/><br/>
        <ProductList products={products} onDelete={onDelete}/>
    </div>
  )
}

export default Product