import React, { useEffect, useState } from 'react'
import AddressInsert from './AddressInsert';
import AddressItem from './AddressItem';
import Pagenation from './Pagenation';
import qs from 'qs';

const Address = ({location}) => {
    const query = qs.parse(location.search, {ignoreQueryPrefix:true});
    const page = !query.page ? 1: query.page;
    const [lastPage, setLastPage] = useState(1);

    const [addresses,setAddresses]= useState('');
    const callAPI =()=>{
        fetch('/address/list?page='+page)
        .then(res =>res.json())
        .then(json=>{
            setAddresses(json)
            //전체데이터갯수
            fetch('/address/count')
            .then(res => res.json())
            .then(json=>
                setLastPage(Math.ceil(json.count/5)));    
        });
    }
    
    useEffect(()=>{
        callAPI();
    },[page]);

    if(!addresses){
        return(
            <h2>데이터 로딩중...</h2>
        );
    } 

    return (
        <div className='Address'>
            <h1>주소관리</h1>
            <AddressInsert callAPI={callAPI}/>
            <table>
                <tr className='title'>
                    <td  width={100}>번호</td>
                    <td  width={100}>이름</td>
                    <td  width={200}>전화</td>
                    <td  width={300}>주소</td>
                    <td  width={100}>삭제</td>
                </tr>
                {addresses.map(address=>
                    <AddressItem addr={address} key ={address.id} callAPI={callAPI}/>
                )}
            </table>
            <Pagenation page={page} lastPage={lastPage} path="/address"/>
        </div>
    )
}

export default Address