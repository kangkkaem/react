import React, { useState } from 'react'
import StudentInsert from './StudentInsert';
import StudentList from './StudentList';

const Student = () => {
    const [students, setStudents]= useState([
        {id:1 , name:'홍길동', tel:'010-1111-2222', address:'인천 남동구 간석동'},
        {id:2 , name:'심청이', tel:'010-3333-4444', address:'인천 부평구 계산동'},
        {id:3 , name:'강감찬', tel:'010-5555-6666', address:'인천 서구 경서동'},
       
    ]);

    const [id,setId] =useState(4);

    const onInsert = (student) => {
        const newStudents = students.concat({
            id :id,
            name: student.name,
            tel : student.tel,
            address: student.address
            });
        setStudents(newStudents);
        setId(id+1); 
        }
        
    const onDelete = (id) => {
        if(!window.confirm(`${id}을(를) 삭제하시겠습니까?`)) return;
        const newStudent=students.filter(s=>s.id !==id);
        setStudents(newStudent);
    }

  return (
        <div>
            <h1>학생관리</h1>
            <StudentInsert onInsert={onInsert}/>
            <hr/>
            <StudentList  students={students} onDelete={onDelete}/>
        </div>
  )
}

export default Student