import React, { useState } from 'react'

const Product = () => {
    const [products, setProducts] = useState([
        {id:1, name:'냉장고',price:500},
        {id:2, name:'세탁기',price:300},
        {id:3, name:'컴퓨터',price:200},
        {id:3, name:'건조기',price:600}
    ]);

    const [name, setName] = useState('스타일러');
    const [price, setPrice] =useState(250);
    const [id, setId]=useState(5);

    const onAdd = ()=>{
        if(name==''){
            alert('상품명을 입력하세요!');
            return;
        }
        const newProducts =products.concat({
            id:4,
            name:name,
            price:price
        });
        setProducts(newProducts);
        setId(id+1);
        setName('');
        setPrice(0);
    }
    
    const onRemove=(id)=>{
        if(!window.confirm(`${id}을(를) 삭제하실래요?`)) return;
        const newProducts=products.filter(p=>p.id !==id);
        setProducts(newProducts);
    }

  return (
    <div>
        <h1>[상품관리]</h1>
        <div>
            상품이름:<input value={name} onChange={(e)=>setName(e.target.value)}/><hr/>
            상품가격:<input value={price}  onChange={(e)=>setPrice(e.target.value)}/><hr/>
            <button onClick={onAdd}>상품등록</button>  
        </div>
        <h1>[상품목록]</h1>
        <ui>
            {products.map(p =>
            <li key={p.id}>
            {p.name}:{p.price} <button onClick={()=>onRemove(p.id)}>삭제</button>
            </li>)}
        </ui>
    </div>
  )
}

export default Product