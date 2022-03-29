import React from 'react'
import { Link } from 'react-router-dom';
import '../css/User.css'

const PostItem = ({post}) => {
    const {id,title,body,date,userid} =post;

    return (
        <div className='postItemBlock'>
            <Link className='a' to ={`/view/${id}`}><h2>{title}</h2></Link>
            <div className='subInfo'>
                <span><b>{userid}</b></span>
                <span>{date}</span>
            </div>
            <p>{body}</p>
        </div>
    )
}

export default PostItem