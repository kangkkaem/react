import { useState } from "react";

const Counter =() =>{
    const  [number, setNumber] = useState(100);
    const onIncrease = () =>{
        setNumber(number+1);
    }
    const onDecrease = ()=>{
        setNumber(number-1);
    }
    return(
        <div>
            <h1>현재 값은: {number}</h1>
            <button onClick={onDecrease}>1씩감소</button>
            <button onClick={onIncrease}>1씩증가</button>
            <button onClick={() => setNumber(100)}>초기화</button>
        </div>
    )
}

export default Counter;