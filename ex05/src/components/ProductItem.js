import React from 'react'
import {post} from 'axios'

const ProductItem = ({product, callAPI}) => {
	const {id,title, fprice, date, company}= product;

    const onDelete = (id) => {
        if(!window.confirm(`${id}를(을) 삭제하실래요?`)) return;
        //db 삭제
        post('/product/delete' ,{"id":id})
        .then(res=>{
            alert('상품삭제 완료!');
            callAPI();
        });
    }
    return (
        <tr>
            <td>{id}</td>
			<td>{title}</td>
			<td>{fprice}</td>
			<td>{company}</td>
			<td>{date}</td>
            <td><button onClick={()=>onDelete(id)} className='sbtn'>삭제</button></td>
        </tr>
    )
}

export default ProductItem