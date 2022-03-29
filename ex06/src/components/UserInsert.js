import React, { useState } from 'react'
import axios from 'axios';

const UserInsert = () => {
    const [user, setUser] =useState({
        id:'',
        pass:'',
        name:'',
        file:null,
        fileName:''
    })
    const {id,pass,name,file,fileName}= user;

    const [img, setImg] = useState('http://placeimg.com/300/350/59');

    const onFileChange= (e) => {  //파일이 변경된경우
        var reader = new FileReader();
        reader.onload = e=>{setImg(e.target.result)};
        reader.readAsDataURL(e.target.files[0]);

        const newUser = {
            ...user,
            file:e.target.files[0],
            fileName: e.target.value
        }
        setUser(newUser);
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        if(!window.confirm('회원을 등록하실래요?')) return;
        const formData = new FormData();
        formData.append('image', file);
        formData.append('id', id);
        formData.append('pass',pass);
        formData.append('name', name);

        const config={
            Headers:{'content-type':'multipart/form-data'}
        };
        const res= await axios.post('/users/insert', formData, config);
        if(res.data==='OK'){
            alert('회원등록성공!');
            window.location.replace('/user');
        }
    }

    const onChange = (e) => {
        const newUser={
            ...user,
            [e.target.name]:e.target.value
        }
        setUser(newUser);
    }

    return (
        <div>
            <h1>회원등록</h1>
            <form onSubmit={onSubmit}>
                <img src={img} width={500} />
                <input type ="file" onChange={onFileChange} accept="image/*"/>
                <input placeholder='아이디' name="id" value={id}  onChange={onChange}/>
                <input placeholder='비밀번호' name="pass" type="password" value={pass} onChange={onChange}/>
                <input placeholder='성명' name="name" value={name}  onChange={onChange}/>
                <div>
                    <button>회원등록</button>
                    <button>등록취소</button>
                </div>
            </form>
        </div>
    )
}

export default UserInsert