import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem';

const Product = () => {
    const [page, setPage] =useState(1);
    const [products, setProducts] = useState('');
    const [count, setCount] =useState(0);
    const [lastPage, setLastPage] =useState(1);

    const callAPI = async() => {
        const res = await axios.get('/product/list?page=' +page);
        setProducts(res.data.rows);
        setCount(res.data.count);
        setLastPage(Math.ceil(res.data.count/5));
    }

    useEffect(()=> {
        callAPI();
    },[page]);

    if(!products){
        return(<h2>데이터 로딩중..</h2>);
    }

  return (
    <div>
        <h1>상품관리</h1>
        <div className='tot'>전체데이터 : {count} 건 </div>
        <table>
            <tr className='title'>
                <td width={50}>번호</td>
                <td width={150}>상품명</td>
                <td width={150}>가격</td>
                <td width={150}>판매처</td>
                <td width={50}>삭제</td>
            </tr>
            {products.map(product=> <ProductItem pro = {product}/>)}
        </table>
        <div className='pagenation'>
                <button className='sbtn' onClick={()=>setPage(page-1)} disabled={page===1 ? true:false}>이전</button>
                <span style={{padding:5}}> {page}/{lastPage}</span>
                <button  className='sbtn' onClick={()=>setPage(page+1)} disabled={page===lastPage ? true:false}>다음</button>
            </div>
    </div>
  )
}

export default Product