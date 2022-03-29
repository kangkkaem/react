import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UserItem from './UserItem';
import './User.css';
import { Link } from 'react-router-dom';


const User = () => {
  const [users,setUsers] = useState('');
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] =useState(1);

  const callAPI = async() => {
    const res=await axios.get('/users/list?page=' +page);
    setUsers(res.data.rows);
    setLastPage(Math.ceil(res.data.count/4));

  }

  useEffect(()=>{
    callAPI();
  },[page]);

  if(!users){
    return(<h2>데이터 로딩중..</h2>);
  }

  return (
    <div>
      <div className='User'>
          <h1>사용자관리</h1>
          <div style={{marginTop:30, textAlign:'left'}}>
            <Link to ="/user/insert"><button className='ad'>회원등록</button></Link>
          </div>
          {users.map(user =><UserItem user={user}/>)}
      </div>
      <div className=''>
          <button className='sbtn' onClick={()=>setPage(page-1)} disabled={page===1 ? true:false}>이전</button>
          <span style={{padding:5}}> {page}/{lastPage}</span>
          <button  className='sbtn' onClick={()=>setPage(page+1)} disabled={page===lastPage ? true:false}>다음</button>
      </div>
    </div>
    
  )
}

export default User