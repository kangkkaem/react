import React from 'react'
import axios from 'axios' 
import { Link } from 'react-router-dom';

const AddressItem = ({addr}) => {
    const {id, name,tel, address} = addr;

    const onDelete = async(id)=>{
      if(!window.confirm(`${id}을(를) 삭제하실래요?`)) return;
      const res=await axios.post('/address/delete', {id:id});
      if(res.data === 'OK'){
        alert('주소삭제성공!');
        window.location.replace('/address');
      }
  }
  return (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{tel}</td>
        <td>{address}</td>
        <td><button  onClick={()=>onDelete(id)} className='btn'>삭제</button></td>
        <td><Link to ={id && `/address/read/${id}`}><button className='btn'>수정</button></Link></td>
    </tr>
  );
}

export default AddressItem