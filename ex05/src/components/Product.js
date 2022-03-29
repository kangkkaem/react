import React, { useEffect, useState } from 'react'
import Pagenation from './Pagenation';
import ProductInsert from './ProductInsert';
import ProductItem from './ProductItem';
import qs from 'qs';

const Product = ({location}) => {

    const query = qs.parse(location.search, {ignoreQueryPrefix:true});
    const page = !query.page ? 1: query.page;
    const [lastPage, setLastPage] = useState(1);

    const [products, setProduct] =useState('');
    const callAPI =() =>{
      fetch('/product/list?page='+page)
      .then(res=>res.json())
      .then(json=>{
        setProduct(json)
    
        //전체데이터
        fetch('/product/count')
        .then(res=>res.json())
        .then(json=>
          setLastPage(Math.ceil(json.count/5)));
        });
    }

    useEffect(()=>{
      callAPI();
    }, [page]);

    if(!products) {
      return (<h2>데이터 로딩중...</h2>);
    }
    return (
      <div className='Product'>
          <h1>상품관리</h1>
          <ProductInsert callAPI={callAPI} />
          <table>
            <tr class ="title">
                <td width={100}>번호</td>
                <td width={200}>상품명</td>
                <td width={100}>가격</td>
                <td width={100}>판매처</td>
                <td width={100}>등록일</td>
                <td  width={100}>삭제</td>
            </tr>
            {products.map(product=>
                <ProductItem product={product} key ={product.id} callAPI={callAPI}/>
              )}
          </table>
          <Pagenation page={page} lastPage={lastPage}  path="/product"/>
      </div>
    )
}

export default Product