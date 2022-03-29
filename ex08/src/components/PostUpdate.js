import axios from 'axios'
import React from 'react'
import '../css/PostUpdate.css'

const PostUpdate = ({post}) => {

    const onUpdate = async() =>{
        //alert(JSON.stringify(post,null,2))
        if(!window.confirm('내용을 수정하실래요?')) return;
        const res = await axios.post('/posts/update',post);
        if(res.status===200){
            window.location.replace('/');
        }
    }

    const onDelete = async() => {
        if(!window.confirm('내용을 삭제하실래요?')) return;
        const res =await axios.post('posts/delete',post);
        if(res.status===200){
            window.location.replace('/');
        }
    }

    return (
        <div className='postUpdate'>
            <span onClick={onUpdate}>수정</span>
            <span onClick={onDelete}>삭제</span>
        </div>
    )
}

export default PostUpdate