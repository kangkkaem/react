import React, {useState, useEffect} from 'react'
import axios from 'axios'

const AddressRead = ({match}) => {

    const {id} = match.params;

    const [addr, setAddr] = useState({
        id:0,
        name: '',
        tel: '',
        address: ''
    });
        
    const {name, tel, address} =addr;

    const callAPI = async() => {
        const res= await axios.get('/address/read/'+id);
        setAddr(res.data);
    }

    useEffect(()=>{
        callAPI();
    }, [id]);

    const onChange = (e) =>{
        const newAddr={
            ...addr,
            [e.target.name]: e.target.value
        }
        setAddr(newAddr);
    }

    const onSubmit =async(e)=>{
        e.preventDefault();
        if(!window.confirm('주소를 수정하실래요?')) return;
        const res = await axios.post('/address/update', addr);
        if(res.data === 'OK'){
            alert('주소정보수정완료!');
            window.location.replace('/address');
        }
    }

  return (
    <div>
        <div className='Address'>
            <h1>주소정보</h1>
            <form onSubmit={onSubmit}>
                <input placeholder='이름' value={name} name="name" onChange={onChange}/>
                <input placeholder='전화' value={tel} name="tel" onChange={onChange}/>
                <input placeholder='주소' value={address} name="address" onChange={onChange}/>
                <div>
                    <button type="submit">주소수정</button>
                    <button type="reset">등록취소</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddressRead