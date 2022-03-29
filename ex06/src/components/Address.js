import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddressItem from './AddressItem';
import { Link } from 'react-router-dom';

const Address = () => {
    const [addresses, setAddresses] = useState('');
    const [page, setPage]= useState(1);
    const [lastPage, setLastPage] =useState(1);

    const callAPI= async() =>{
        const res =await axios.get('/address/list?page='+page)
        //console.log(JSON.stringify(res.data, null, 2));
        setAddresses(res.data.rows);
        setLastPage(Math.ceil(res.data.count/5));
    }

    useEffect (()=> {
        callAPI();
    }, [page]);

    if(!addresses){
        return(<h2>데이터 로딩중..</h2>);
    }

  return (
    <div className='Address'>
        <h1>주소관리</h1>
            <table>
            <span  className='link'><Link to ="/address/insert"><button className='ad'>주소등록</button></Link></span>

                <tr className='title'>
                    <td width={50}>번호</td>
                    <td width={100}>이름</td>
                    <td width={150}>전화</td>
                    <td width={200}>주소</td>
                    <td width={50}>삭제</td>
                    <td width={50}>수정</td>
                </tr>
                {addresses.map(address=> <AddressItem addr ={address}/>)}
            </table>    
            <div className='pagenation'>
                <button className='sbtn' onClick={()=>setPage(page-1)} disabled={page===1 ? true:false}>이전</button>
                <span style={{padding:5}}> {page}/{lastPage}</span>
                <button  className='sbtn' onClick={()=>setPage(page+1)} disabled={page===lastPage ? true:false}>다음</button>
            </div>
    </div>
  )
}

export default Address