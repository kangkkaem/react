import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css'

const Header = () => {
  const [logid, setLogid]=useState('');

  useEffect(()=>{
    setLogid(sessionStorage.getItem('logid'));
  },[logid]);

  const logout =() =>{
    sessionStorage.removeItem('logid');
    window.location.replace("/");
  }

  return (
      <div className='headerBlock'>
        <div >
            <Link to ="/" className='logo'>REACTERS</Link>
        </div>
        {logid ? (
          <div className='right'>
            <span className='userinfo'>{logid}</span>
            
              <button className='grayButton' onClick={logout}>로그아웃</button>
           
          </div>
        ) : (
          <div className='right'>
            <Link to ="/login">
              <button className='grayButton'>로그인</button>
            </Link>
          </div>
        )}
        
      </div>
  )
}

export default Header