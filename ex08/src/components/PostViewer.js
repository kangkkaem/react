import React, { useEffect, useState } from 'react'
import '../css/PostViewer.css';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import PostUpdate from './PostUpdate';

const PostViewer = ({match}) => {
    var postid =match.params.postid;
    const loginid =sessionStorage.getItem('userid');
    const [post,setPost] =useState('');
    const {id, title,body,date,userid}=post;
    const logid=sessionStorage.getItem('logid');

    const callAPI =async() =>{
        const res = await axios.get('/posts/'+postid);
        setPost(res.data);
        
    }

    useEffect(()=> {
        callAPI();
    },[]);

    if(!post) {
        return(<h2>데이터로딩중....</h2>);
    }

    const onChange = (e) =>{
        const newPost = {...post, [e.target.name]:e.target.value}
        setPost(newPost);
    }
     
    return (
        <div className='postViewerBlock'>
            <form className='viewerForm'>
                <input onChange={onChange} name="title" disabled={logid !== userid && true} value={title} placeholder='제목을 입력하세요!'/>
                <div className='subinfo'>
                    <span><b>{userid}</b></span>
                    <span>{date}</span>
                </div>
                {logid === userid && <PostUpdate post={post}/>}
                <textarea onChange={onChange} name="body" disabled={logid !==userid && true} value={body} placeholder='내용을 입력하세요!'/>
            </form>
        </div>
    )
}

export default withRouter(PostViewer)