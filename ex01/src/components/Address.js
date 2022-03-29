import React, {useState} from 'react'

const Address = () => {
    const [form,setForm] = useState({
        name:'홍길동',
        tel:'010-2134-1234',
        address:'인천 남동구 간석동'
    });

    const {name, tel,address} = form;
    const onChange = e=> {
        const newForm={
            ...form,
            [e.target.name]:e.targe.value
        };
        setForm(newForm);
    }

    const onClick=()=>{
        alert(`이름:${name}\n전화:${tel}\n주소:${address}`);
        setForm({
            name:'',
            tel:'',
            address:''
        });
    }
  return (
        <div>
            이름:<input name="name" value={name} onChange={onChange}/>  <br/>
            전화:<input tel="tel"  value={tel} onChange={onChange}/>  <br/>
            주소:<input address="address" value={address} onChange={onChange}/>  <br/>
            <button onClick={onClick}>확인</button>
            <hr/>
            <h2>이름: {name}</h2>
            <h2>전화:{tel}</h2>
            <h2>주소:{address}</h2>

        </div>
  )
}

export default Address