import React, { useEffect, useState,useRef } from 'react'
import './Student.css'
import StudentInsert from './StudentInsert'
import StudentList from './StudentList'

const Student = () => {
    const [students, setStudents] =useState([
        {id:1, name:'홍길동', tel:'010-1234-1234', address:'인천 남동구 간석동'},
        {id:2, name:'심청이', tel:'010-3333-4444', address:'인천 서구 경서동'},
        {id:3, name:'강감찬', tel:'010-5555-6666', address:'인천 부평구 계산동'}
    ]);

    const refId =useRef(4);


    
    //학생등록
    const onInsert =(student)=>{
        const newStudent={
            id:4,
            name: student.name,
            tel: student.tel,
            address : student.address
        }
        setStudents(student.concat(newStudent));

    }

    //학생삭제
    const onDelete = (id) => {
        setStudents(students.filter(s=>s.id !==id))
    }
    useEffect(()=>{
        console.log('...');
    })
    return (
        <div className='Student'>
            <StudentInsert onInsert={onInsert}/>
            <br/>
            <StudentList students={students}/>
        </div>
  )
}

export default Student