import React, { useState } from 'react'
import {post} from 'axios'

const AddressInsert = ({callAPI}) => {
    const [addr, setAddr] = useState({
        name:'무기명',
        tel: '010-1111-2222',
        address: '인천'
    });
    const {name,tel, address} =addr;
    const onChange = (e) =>{
        const newAddr={
            ...addr,
            [e.target.name]:e.target.value
        }
        setAddr(newAddr);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(name==='' || tel ===''|| address===''){
            alert('내용을 채워주세요!');
            return;
        }
        if(!window.confirm('내용을 등록하실래요?')) return;
        post('/address/insert', addr)
        .then(res=>{
            onReset();
            callAPI();
        });
        
    }

    const onReset= () => {
        setAddr({
            name:'',
            tel:'',
            address:''
        });
    }
    return (
        <form onSubmit={onSubmit}>
            <input placeholder='이름' value={name} name="name" onChange={onChange}/>
            <input placeholder='전화' value={tel} name="tel" onChange={onChange}/>
            <input placeholder='주소'  value={address}  name="address" onChange={onChange}/>
            <div>
                <button type ="submit">주소등록</button>
                <button type="reset" onClick={onReset}>등록취소</button>
            </div>
        </form>
  )
}

export default AddressInsert