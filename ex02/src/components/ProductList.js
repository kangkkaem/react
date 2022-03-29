import React from 'react'

const ProductList = ({products}) => {
  return (
    <div>
        <h1>상품목록</h1>
        <table>
            <tr>
                <td width={50} className="title">번호</td>
                <td width={100} className="title">상품명</td>
                <td width={150} className="title">상품가격</td>
                <td width={100} className="title">판매처</td>
            </tr>
            {products.map(p=>(
                <tr>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.price}</td>
                    <td>{p.company}</td>
                </tr>
            ))}
        </table>
    </div>
  )
}

export default ProductList