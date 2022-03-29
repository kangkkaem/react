import React from 'react'

const ProductList = ({ products, onDelete}) => {
    
    const onRemove = (id) =>{
        if(!window.confirm(`${id}을(를) 삭제하실래요?`)) return;
        onDelete(id);
    }
    return (
        <div>
            <h1>상품목록</h1>
            <table>
                <tr>
                    <td className='title' width={50}>번호</td>
                    <td className='title' width={100}>상품명</td>
                    <td className='title' width={100}>가격</td>
                    <td className='title' width={100}>판매처</td>
                    <td className='title' width={100}>삭제</td>
                </tr>
                {products.map(p=>(
                    <tr className='row'>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                        <td>{p.company}</td>
                        <td><button className='btn' onClick={()=>onRemove(p.id)}>삭제</button></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default ProductList