import React from 'react'


const ProductItem = ({pro}) => {
    const {id, title,fprice, company} = pro;

   

    return (
      <tr>
          <td>{id}</td>
          <td>{title}</td>
          <td>{fprice}</td>
          <td>{company}</td>
          <td><button className='btn'>삭제</button></td>
      </tr>
    );
}

export default ProductItem