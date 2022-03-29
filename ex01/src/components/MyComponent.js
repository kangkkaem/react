const MyComponent = (props) =>{
    const {name, age} = props;

    const style ={color:'green'}
    return(
        <div>
            <h1>제이름은 <span style={style}>{name}</span> 입니다.</h1>
            <h1>제나이는 <span style={style}>{age}</span>살 입니다.</h1>
            <h1>자식은 {props.children}</h1>
        </div>
    )
   
}
MyComponent.defaultProps = {
    name : '강감찬',
    age : '40'
}

export default MyComponent;