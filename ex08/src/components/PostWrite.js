import axios from 'axios';
import React, { useRef, useState } from 'react'
import '../css/PostWrite.css'

const PostWrite = () => {

  const [post,setPost] =useState({
    title:'',
    body:'',
    userid:'blue'
  });

  const refTitle= useRef(null);
  const refBody=useRef(null);

  const {title,body}=post;

  const onChange= (e) => {
    const newPost = {
      ...post,
      [e.target.name]:e.target.value
    }
    setPost(newPost);
  }

  const onReset = (e) => {
    setPost({
      title:'',
      body:'',
      userid:'blue'
    }); 
  }

  const onSubmit = async(e) =>{
    e.preventDefault();
    if(title ===''){
      alert("제목을 입력하세요!");
      refTitle.current.focus();
    }else if(body===''){
      alert("내용을 입력하세요!");
      refBody.current.focus();
    }else{
      if(!window.confirm('내용을 등록하실래요?')) return;
      //alert(JSON.stringify(post,null,2));
      const res = await axios.post('/posts/insert', post);
      if(res.status===200){
        window.location.replace('/');
      } 
    }
  }

  return (
    <div className='postWriteBlock'>
        <form className='postForm' onSubmit={onSubmit}>
            <input ref={refTitle} name="title" onChange={onChange} placeholder='제목을 입력하세요!' value={title}/>
            <textarea ref={refBody} name="body" onChange={onChange} placeholder='내용을 입력하세요!'value={body}/>

            <div className='postButtonWrapper'>
              <button className='skyButton' type='submit'>포스트등록</button>
              <button className='skyButton' type='reset' onClick={onReset}>등록취소</button>
            </div>
        </form>
    </div>
  )
}

export default PostWrite