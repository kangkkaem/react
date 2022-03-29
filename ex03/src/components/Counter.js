import React, { useState } from 'react'
import './Counter.css';

const Counter = ({name,children}) => {
  const [number, setNumber]=useState(0);
  const style1={
    backgroundColor:'green',
    color:'black'
  }

  //증가함수
  const onIncrease = (add) => {
    setNumber(number+add);
  }

  //감소함수
  const onDecrease=()=>{
    setNumber(number-1);
  }
  return (
    <div className='Counter'>
        <h1 style={style1}>{name}의 {children}</h1>
        <h1 style={{color:'darkblue', background:'gray'}}>현재값:{number}</h1>
        <button onClick={onDecrease} onDoubleClick={()=>setNumber(0)}>감소</button>
        <button onClick={()=>onIncrease(2)}  onDoubleClick={()=>setNumber(100)}>증가</button>
    </div>
  )
}

export default Counter