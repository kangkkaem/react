import { getQueriesForElement } from "@testing-library/react";
import { useState } from "react";

function Say (props){
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('black');
    return(
        <div>
            <h1 style={{color:color}}>메세지:{props.name} {message}</h1>
            <button onClick={() => setMessage('입장하셨습니다.')}>입장</button>
            <button onClick={() => setMessage('퇴장하셨습니다.')}>퇴장</button>
            <br/>   
            <button style={{color:'white', background:'red'}}
                onClick={()=>setColor('red')}>빨간색</button>
            <button style={{color:'white', background:'blue'}}
                 onClick={()=>setColor('blue')}>파란색</button>
            <button style={{color:'white', background:'green'}}
                onClick={()=>setColor('green')}>초록색</button>
        </div>
    )
}

Say.defaultProps={
    name: '아무게'
}

export default Say;
