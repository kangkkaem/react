import React, { useEffect, useState } from 'react'
import '../css/PostList.css'
import axios from 'axios'
import PostItem from './PostItem';
import { Link } from 'react-router-dom';

const PostList = () => {
    const [page,setPage] = useState(1);
    const [posts, setPosts] =useState(null);
    const [lastPage, setLastPage] =useState(1);
    const [logid, setLogid] = useState('');

    const callAPI =async()=> {
        const res =await axios.get('/posts?page='+page);
        setPosts(res.data.rows);
        setLastPage(Math.ceil(res.data.count/5));
        //console.log(JSON.stringify(posts,null,5));
    }

    useEffect(()=>{
        callAPI();
        setLogid(sessionStorage.getItem('logid'));
        
    },[page]);

    if(!posts){
        return(
            <h2>데이터 로딩중...</h2>
        );
    }

    return (
        <div className='postListBlock'>
             <div className='buttonWrapper'>
                <Link to ="/write">
                    {logid && <button className='skyButton'>새글 작성하기</button>}
                </Link>
            </div>

            {posts.map(post=> <PostItem key ={post.id} post={post}/>)}

            <div className='paginationBlock'>
                <button className='grayButton' 
                    onClick={()=>setPage(page-1)} disabled={page===1?true:false}>이전</button>
                <span>{page}/{lastPage}</span>
                <button className='grayButton' 
                    onClick={()=>setPage(page+1)} disabled={page===lastPage?true:false}>다음</button>
            </div>
        </div>
    )
}

export default PostList