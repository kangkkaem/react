import React, { useState } from 'react'

const Food = () => {
    const [foods,setFoods] =useState([
        {id:1,name:'닭꼬치'},
        {id:2,name:'족발'},
        {id:3,name:'치킨'},
        {id:4,name:'탕수육'},
        {id:5,name:'팔보채'},
    ]);
    
    const [newFood, setNewFood]=useState('만두');
    const [id, setId]=useState(6);

    const onAdd =() => {
        if(newFood==''){
            alert("음식명을 입력하세요!")
            return;
        }
        const newFoods=foods.concat({
            id:id,
            name:newFood
        })
        setFoods(newFoods);
        setId(id+1);
        setNewFood('');
        }

        const onRemove =(id)=>{
            const newFoods=foods.filter(food=>food.id !==id);
            setFoods(newFoods);
        }

        const onKeyPress=(e)=>{
            if(e.key=='Enter') onAdd();
        }


  return (
        <div>
            <h1>음식목록</h1>
            <div>
                <input value ={newFood}
                    onChange={(e)=>setNewFood(e.target.value)}
                    onKeyPress={onKeyPress}/>
                    <button onClick={onAdd}>추가</button>
            </div>
                    <ol>
                        {foods.map((food)=>
                        <li key={food.id} 
                        onDoubleClick={()=>onRemove(food.id)}>{food.name}</li>)}
                    </ol>
            
         
        </div>
  )
}

export default Food