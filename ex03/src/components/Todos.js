import React, { useEffect, useState } from 'react'

const Todos = () => {
    const [todos, setTodos] =useState('');
    const [page, setPage] =useState(1);

    const callAPI = ()=> {
        let start=(page-1)*10 +1;
        let end =page*10;

        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json =>setTodos(json.filter(todo=>todo.id >=start && todo.id <=end)));
    }

    useEffect(()=>{
        callAPI();
    },[page]);

 
    return (
        <div className='Student'>
            <h1> 할일목록 </h1>
            <div>
                {todos ? (
                    todos.map(todo=><h3 style={{ margin:'40px'}}>[{todo.id}] {todo.title}</h3>)) : 
                        <h3>'데이터를 불러오는중....'</h3>}
            </div>
            <div>
                <button onClick={()=>setPage(page-1)} disabled={page==1?true:false}>이전</button>
                <span>{page}&nbsp;</span>
                <button onClick={()=>setPage(page+1)} disabled={page==20?true:false}>다음</button>
            </div>
        </div>
    )
}

export default Todos