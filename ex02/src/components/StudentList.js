import React from 'react'

const StudentList = ({students, onDelete}) => {
  return (
    <div>
        <h1>학생목록</h1>
        <table>
            <tr className='title'>
                <td width={100}>번호</td>
                <td width={100}>이름</td>
                <td width={200}>전화</td>
                <td width={300}>주소</td>
                <td width={60}>삭제</td>
            </tr>
            {students.map(s=>(
                <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.tel}</td>
                    <td>{s.address}</td>
                    <td><button onClick={()=>onDelete(s.id)}>삭제</button></td>
                </tr>
            ))}
        </table>
    </div>
  )
}

export default StudentList