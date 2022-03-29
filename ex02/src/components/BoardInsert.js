import React, { useState } from 'react'

const BoardInsert = ({onInsert}) => {
    const [board, setBoards] = useState({
        id:0,
        title:'',
        contents:''
    });

    const {id, title,contents}=board; //비구조 할당

    const onChange =(e) => {
        setBoards({
            ...board,
            [e.target.name]: e.target.value
        })
    }


    const onSubmit = (e)=>{
        e.preventDefault();
        if(title==='' || contents===''){
            alert('제목이나 내용을 입력하세요!');
            return;
        }
        if(!window.confirm(`새로운게시글을 등록하시겠습니까?`)) return;
        onInsert(board);
        onReset();
    }

    const onReset = () =>{
        setBoards({
            id:0,
            title:'',
            contents:''
            
        });
    }

return (
    <form onSubmit={onSubmit}>
        <input value={title} name ="title" onChange={onChange}/>
        <textarea rows={10} cols={80} value={contents} 
            name ="contents" onChange={onChange}></textarea>
        <div>
            <button type="submit">게시글등록</button>
            <button type="reset" onClick={onReset}>등록취소</button>
        </div>
    </form>
  )
}

export default BoardInsert