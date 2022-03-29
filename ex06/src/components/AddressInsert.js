import React, { useState } from 'react'
import axios from 'axios';

const AddressInsert = () => {
    const [addr, setAddr] = useState({
        name: '홍길동',
        tel: '010-1234-5678',
        address: '인천 남동구 간석동'
    });
       
    const {name, tel, address} =addr;

    const onChange = (e) =>{
        const newAddr={
            ...addr,
            [e.target.name]: e.target.value
        }
        setAddr(newAddr);
    }

    const onSubmit =async(e)=>{
        e.preventDefault();
        if(!window.confirm('주소를 등록하실래요?')) return;
        const res =await axios.post('/address/insert', addr);
       if(res.data==='OK'){
            alert('주소등록 성공!');
            window.location.replace('/address');
       }
    }

    return (
        <div className='Address'>
            <h1>주소등록</h1>
            <form onSubmit={onSubmit}>
                <input placeholder='이름' value={name} name="name" onChange={onChange}/>
                <input placeholder='전화' value={tel} name="tel" onChange={onChange}/>
                <input placeholder='주소' value={address} name="address" onChange={onChange}/>
                <div>
                    <button type="submit">주소등록</button>
                    <button type="reset">등록취소</button>
                </div>
            </form>
            
        </div>
  )
}

export default AddressInsert