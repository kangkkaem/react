import React from 'react'
import Student from './Student'

const StudentList = ({students}) => {
  return (
    <div>
        <h1>학생목록 </h1>
        <table>
            <tr>
                <td className='title' width={50}>번호</td>
                <td className='title' width={140}>이름</td>
                <td className='title' width={150}>전화</td>
                <td className='title' width={200}>주소</td>
                <td className='title' width={100}>삭제</td>
            </tr>
            {students.map(s=>(
                <tr  key ={s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.tel}</td>
                    <td>{s.address}</td>
                    <td><button>삭제</button></td>
                </tr>
            ))}
        </table>
    </div>
  )
}

export default StudentList