import React, { useEffect, useState } from 'react'
import Paging from './Paging';

const Todo=() =>{

    const [page,setPage] = useState(1);
    const [todos, setTodos] =useState('');

    useEffect(()=>{
        let start = (page-1)*10+1;
        let end =(page*10);
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setTodos(json.filter(todo=>todo.id >=start && todo.id<=end)));
    });

    const onNextPage=()=>{
        setPage(page+1);
    }
    const onPrevPage=()=>{
        setPage(page-1);
    }

  return (
    <div>
        <h1>할일목록</h1>
        <div className='todo'>
            {todos ? todos.map(todo=>(
                <div key={todo.id}>
                    <h3>[{todo.id} : {todo.title}]</h3>
                </div>
            )): '데이터를 불러오는중..'}
            
        </div>
        <Paging onNext={onNextPage} onPrev={onPrevPage} page={page} last={10}/>
    </div>
  )
}

export default Todo