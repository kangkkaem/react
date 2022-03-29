import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Customer from './Customer';
import {Paper, Table, TableBody, TableCell, TableContainer, TableRow, TableHead, Button} from '@mui/material' 
import SearchAppBar from './SearchAppbar';
import CustomerInsert from './CustomerInsert';
import {withRouter} from 'react-router-dom'
import qs from 'qs';

const Customers = ({location}) => {
    const query = qs.parse(location.search, {ignoreQueryPrefix:true});
    const searchKey = !query.searchKey ? '': query.searchKey;


    const [customers, setCustomers] = useState(null);
    const [page, setPage] =useState(1);
    const [lastPage,setLastPage] =useState(1);

    const callAPI= async()=>{
        const res =await axios.get(`/customers/list?page=${page}&search=${searchKey}`);
        setCustomers(res.data.rows);
        setLastPage(Math.ceil(res.data.count/3));
        
    };

    useEffect(()=>{
        callAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    },[page]);

    if(!customers){
        return(<h1>데이터 로딩중...</h1>);
    }

    const title=['번호','이미지','성명','생년월일','성별','직업','탈퇴']
  return (
    <div>
        <SearchAppBar searchKey={searchKey}/>
        <div style ={{margin:20}}><CustomerInsert callAPI={callAPI}/></div>
        <TableContainer conponent= {Paper}>
            <Table sx={{minWith:650}} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        {title.map(title=><TableCell key={title}>{title}</TableCell>)}
                     </TableRow>
                </TableHead>
                <TableBody>
                    {customers.map(customer=><Customer customer={customer} callAPI={callAPI}/>)}
                </TableBody>
            </Table>
        </TableContainer>
        <div style={{margin:'30px',textAlign:'center'}}>
            <Button variant ='contained' onClick={()=>setPage(page-1)} disabled={page===1?true:false}>이전</Button>
            <span>{page}/{lastPage}</span>
            <Button variant ='contained' onClick={()=>setPage(page+1)} disabled={page===lastPage?true:false}>다음</Button>
        </div>
    </div>
  )
}

export default withRouter(Customers)