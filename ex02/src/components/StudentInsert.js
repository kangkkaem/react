import React, { useState } from 'react'

const StudentInsert = ({onInsert}) => {
    const [student, setStudent] = useState({
        id: 5,
        name: '아무게',
        tel :'001',
        address: '인천'
    });

    const onChange = (e) =>{
        const newStudent = {
            ...student,
            [e.target.name] : e.target.value
        }
        setStudent(newStudent);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(!window.confirm('학생을 등록하실래요?')) return;
        onInsert(student);
        onReset();
    }

    const onReset = ()=>{
        setStudent({
            id: 0,
            name: '아무게',
            tel :'001',
            address: '인천'
        })
    }

    const {id,name,tel,address}=student;
    
  return (
    <form onSubmit={onSubmit}>
        <table>
            <tr>
                <td className='title' width={100}>이름</td>
                <td width={300}>
                    <input value={student.name} name="name" onChange={onChange} size={40}/></td>
            </tr>
            <tr>
                <td className='title'>전화</td>
                <td><input value={student.tel} name="tel" onChange={onChange} size={40}/></td>
            </tr>
            <tr>
                <td className='title'>주소</td>
                <td><input value={student.address} name="address" onChange={onChange} size={40}/></td>
            </tr>
        </table>
        <div>
            <button type="submit">학생등록</button>
            <button type="reset" onClick={onReset}>등록취소</button>
        </div>
    </form>
  ) 
}

export default StudentInsert