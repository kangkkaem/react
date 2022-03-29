import React, { useState, useRef } from 'react'
import {post} from 'axios'


const ProductInsert = ({callAPI}) => {
    const [product, setProduct] = useState({
        title:'',
        price:'0',
        company:'롯데백화점'
    });
    const {title,price,company} =product;
    const refPrice=useRef(null);

    const onSubmit = e =>{
        e.preventDefault();
        
        if(title ==='' || company===''){
            alert("상품정보를 채워 넣으세요!");
            return;
        }else if(price.replace(/[0-9]/g,'') || price===""){
            refPrice.current.focus();
            alert("가격을 숫자로 입력하세요!")
            return;
        }
        if(!window.confirm('상품을 등록하실래요?')) return;
        //상품 데이터베이스에 등록
        post('/product/insert' , product)
        .then(res=> {
            alert('상품등록성공!');
            callAPI();
        });
    }

    const onChange = e => {
        const newProduct ={
            ...product,
            [e.target.name]:e.target.value
        };
        setProduct(newProduct);
    }

    return (
        <form onSubmit={onSubmit} >
            <input placeholder='상품명'  value={title} name ="title" onChange={onChange}/>
            <input placeholder='상품가격' ref={refPrice} value={price} name ="price" onChange={onChange}/>
            <input placeholder='판매처' value={company} name="company" onChange={onChange}/>
            <div>
                <button type ="submit">상품등록</button>
                <button type ="reset">등록취소</button>
            </div>
        </form>
    )
}

export default ProductInsert