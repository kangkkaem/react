import React, { useState } from 'react'
import './User.css';

const UserItem = ({user}) => {
    const {id,pass,name,image} = user;
    return (
        <div className='item1'>
            <img src ={image}/>
            <div>{name}[{id}]</div>
        </div>
    )
}

export default UserItem