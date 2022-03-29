import React, { useCallback, useEffect, useRef, useState } from 'react'

const ProductInsert = ({onInsert}) => {
    const [product,setProducts] =useState({
        id:0,
        name:'스타일러',
        price:150,
        company:'엘지'
    });

    const {id, name, price, company}=product;

    const refName =useRef('');

    const onChange =useCallback(e=>{
        setProducts({
            ...product,
            [e.target.name]: e.target.value
        });
        console.log('onChange...');
    },[]);

    const onSubmit = (e) => {
        e.preventDefault();
        if(name ===''||company===''){
            alert('상품정보를 입력하세요!');
            return;
        }
        if(!window.confirm('상품을 등록하실래요?')) return;
        onInsert(product);
    }

    const onReset = () =>{
        setProducts({
            id:'',
            name:'',
            price:0,
            company:'삼성'
        });
        refName.current.focus();
    }

    useEffect(()=> {
        refName.current.focus();
    }, []);

  return (
    <div>
        <h1>상품등록</h1>
        <form onSubmit={onSubmit}>
            <input name="name" ref={refName} value={name} onChange={onChange} placeholder='상품이름'/>
            <input name="prcie" value={price} onChange={onChange} placeholder='상품가격'/>
            <input name="company" value={company} onChange={onChange} placeholder='판매처'/>
            <button type="submit">상품등록</button>
            <button type="reset" onClick={onReset}>등록취소</button>
        </form>
    </div>
  )
}

export default ProductInsert