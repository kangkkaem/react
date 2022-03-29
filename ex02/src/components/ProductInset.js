import React, { useState } from 'react'

const ProductInset = ({onInsert}) => {
    const [product, setProduct] =useState({
        id:0,
        name:'아무것',
        price: 100,
        company: '삼성'
    });

    const {id, name , price, company} = product;

    const onSubmit= (e)=>{
        e.preventDefault();
        onInsert(product);
    }

   
  return (
    <form onSubmit={onSubmit}>
        <table>
            <tr>
                <td width={100} className="title">상품이름</td>
                <td width={300}  >
                    <input size={40} value={name}/>
                </td>
            </tr>
            <tr>
                <td width={100} className="title">상품가격</td>
                <td width={300} >
                    <input  size={40} value={price}/>
                </td>
            </tr>
            <tr>
                <td width={100} className="title">판매처</td>
                <td width={300} >
                    <input size={40} value={company}/>
                </td>
            </tr>
        </table>
        <div>
            <button type="submit">상품등록</button>
            <button type="reset">상품취소</button>
        </div>
    </form>
  )
}

export default ProductInset