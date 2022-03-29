import React from 'react'
import {post} from 'axios'

const AddressItem = ({addr, callAPI}) => { 
    const {id,name,tel,address} =addr;

    const onDelete = (id) => {
        if(!window.confirm(`${id}를(을) 삭제하실래요?`)) return;
        //db 삭제
        post('/address/delete' ,{"id":id})
        .then(res=>{
            alert('주소삭제 완료!');
            callAPI();
        });
    }
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{tel}</td>
            <td>{address}</td>
            <td><button onClick={()=>onDelete(id)} className='sbtn'>삭제</button></td>
        </tr>
    )
}
export default AddressItem