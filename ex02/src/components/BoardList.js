import React from 'react'

const BoardList = ({boards, onDelete}) => {

    const onClick =(id)=>{
        if(!window.confirm(`${id}를(을) 삭제하실래요?`)) return;
        onDelete(id);
    }
  return (
    <div>
        <h1>게시글목록</h1>
        {boards.map(b=>(
            <div key={b.id} className="board">
                <h2>[{b.id}]{b.title}</h2>
                <div>
                    {b.contents}
                    <button onClick={()=>onClick(b.id)}>삭제</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default BoardList