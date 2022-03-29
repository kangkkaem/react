import axios from 'axios';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/User.css'

const Login = () => {
    const [user, setUser] =useState({
        userid:'',
        username:'',
        password:''
    });

const refid =useRef(null);
const refpass=useRef(null);
const [error, setError] =useState('');

const {userid, username, password} =user;

const onChange = (e) => {
    const newUser ={
        ...user,
        [e.target.name] :e.target.value
    }
    setUser(newUser);
}

const onSubmit = async(e)=>{
    e.preventDefault();
    if(userid===''){
        setError('아이디를 입력하세요!');
        refid.current.focus();
    }else if(password===''){
        setError('비밀번호를 입력하세요!');
        refpass.current.focus();
    }else{
        const res =await axios.get('/user/'+userid);
        if(!res.data){
            setError('존재하지 않는 사용자 입니다!');
            refid.current.focus();
        }else if(res.data.password !==password){
            setError('비밀번호가 일치하지 않습니다!');
            refpass.current.focus();
        }else{
            //setError('로그인 성공');
            sessionStorage.setItem('logid',userid);
            window.location.replace('/');
        }
    }
}

    return (
        <div className='authBlock'>
            <div className='whiteBox'>
                <div className='logo-area'>
                    <Link to="/" className='logo'>REACTERS</Link>
                </div>
                <div className='authForm'>
                    <h3>로그인</h3>
                    <form onSubmit={onSubmit}>
                        <input ref={refid} value={userid} name="userid" onChange={onChange} placeholder='아이디'/>
                        <input ref={refpass} value={password} name="password" type="password" onChange={onChange} placeholder='비밀번호'/>
                        <button type="submit" >로그인</button>
                    </form>
                    {error && <div className='errorMessage'>{error}</div>}
                    <div className='footer'>
                        <Link to ="/register">회원가입</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login