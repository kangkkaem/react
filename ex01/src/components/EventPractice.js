import React, { useState } from 'react'

const EventPractice = () => {

    const [form,setForm] =useState({
        name:'심청이',
        nickname:'똘똘이',
        hobby:'영화감상'
    })
    const {name,nickname,hobby} = form;
    const onChange = e=>{
        const newForm={
            ...form,
            [e.target.name]:e.targe.value
        }
        setForm(newForm);
    }

  return (
    <div>
        <h1>Change 이벤트 연습</h1>
        <input value={name} name="name" onChange={onChange}/>
        <input value={nickname} name="nickname"  onChange={onChange}/>
        <input value={hobby} name="hobby"  onChange={onChange}/>

        <button>확인</button>
        <hr/>
        <h1>성명:{name}</h1>
        <h1>별명:{nickname}</h1>
        <h1>취미:{hobby}</h1>
    </div>
  )
}

export default EventPractice