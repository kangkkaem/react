import axios from 'axios';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/User.css'

const Register = () => {
    const [error, setError] =useState('');
   
    const refid = useRef(null);
    const refpass =useRef(null);
    const refpassConfirm=useRef(null);
    const refname =useRef(null);

    const[check, setCheck]=useState(false);

    const [user, setUser] = useState({
        userid:'',
        username: '',
        password:'',
        passwordConfirm:''
    });
    const {userid, username, password, passwordConfirm} =user;

    const onChange=(e) =>{
        if(e.target.name === 'userid')setCheck(false);
        const newUser ={
            ...user,
            [e.target.name]:e.target.value
        }
        setUser(newUser);
    }

    const onSubmit = async(e) =>{
        e.preventDefault();
        if(userid===''){
            setError('아이디를 입력하세요!');
            refid.current.focus();
        }else if(password===''){
            setError('비밀번호를 입력하세요!');
            refpass.current.focus();
        }else if(password !== passwordConfirm){
            setError('비밀번호가 일치하지 않습니다!');
            refpassConfirm.current.focus();
        }else if(username === ''){
            setError('이름을 입력하세요!');
            refname.current.focus();
        }else{
            if(!check){
                setError('중복체크를 해주세요!')
                refid.current.focus();
            }
            const res =await axios.post('/user/insert',user);
            if(res.status === 200){
                window.location.replace('/login');
            }
        }
    }

    const onCheck= async()  => {
        const res = await axios.get('/user/check/'+userid);
        const result = res.data.check;
        if(result ==1) {
            setError('존재하는 아이디입니다.'); 
            refid.current.focus();
           
        }else{
            setError('사용가능한 아이디입니다.')
            setCheck(true);
        }
    }
  return (
    <div className='authBlock'>
        <div className='whiteBox'>
            <div className='logo-area'>
                <Link to ="/" className='logo'>REACTERS</Link>
                </div>
                <div className='authForm'>
                <h3>회원가입</h3>
                    <form onSubmit={onSubmit}>
                        <input ref={refid} value={userid} name="userid" onChange={onChange} placeholder='아이디'/>
                        {!check &&  <button type="button" onClick={onCheck}>중복체크</button> }
                       
                        <input ref={refpass} value={password} name="password" type="password" onChange={onChange} placeholder='비밀번호'/>
                        <input ref={refpassConfirm} value={passwordConfirm} name="passwordConfirm" type="password" onChange={onChange} placeholder='비밀번호'/>
                        <input ref={refname} value={username} name ="username" placeholder='이름' onChange={onChange}/>
                        <button type="submit" >회원가입</button>
                    </form>
                    {error && <div className='errorMessage'> {error}</div>}
                    <div className='footer'>
                        <Link to ="/login">로그인</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Register