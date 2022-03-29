import React, { useState, useRef, useEffect, useCallback } from 'react'
import Student from './Student'

const StudentInsert = ({onInsert}) => {
    const [student, setstudent] =useState({
        id:0,
        name:'성춘향',
        tel:'010-2345-2145',
        address:'서울 강서구 화곡동'
    });
    
    const refName =useRef('');
    
    const {name,tel,address}=student;

    const onChange =useCallback((e)=>{
        const newStudent ={
        ...student,
        [e.target.name]:e.target.value
    }
    setstudent(newStudent);
    console.log('onChange' +JSON.stringify(student, null,2));
    },[]);

    useEffect(()=>{
        console.log('effect' +JSON.stringify(student, null,2));
    },[]);

    const onSubmit =(e) =>{
        e.preventDefault();
        if(name==='' || tel==='' || address===''){
            alert('학생정보를 입력하세요!');
            return;
        }
        if(!window.confirm('학생정보를 등록하실래요?')) return;
        alert(`${name}\n${tel}\n${address}`);
        onInsert(student);
        onReset();
        refName.current.focus();
    }

    const onReset = () => {
        setstudent({
            id:0,
            name:'',
            tel:'',
            address:''
        });
    }
  return (
    <div>
        <h1>학생등록</h1>
        <form onSubmit={onSubmit}>
            <input ref={refName} value={name} name="name" onChange={onChange} placeholder='학생이름'/>
            <input value={tel} name="tel" onChange={onChange} placeholder='학생전화'/>
            <input value={address} name="address" onChange={onChange} placeholder='학생주소'/>
            <button type="submit">학생등록</button>
            <button type="reset" onClick={onReset}>등록취소</button>
        </form>
    </div>
  )
}

export default StudentInsert