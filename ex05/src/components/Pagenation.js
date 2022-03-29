import React from 'react'
import {Link} from 'react-router-dom';

const Pagenation = ({page, path, lastPage}) => {
    var intPage = parseInt(page);  
    return (
        <div className='pagenation'>
            <Link to={intPage===1 ?`${path}?page=1`: `${path}?page=${intPage-1}`}>
                <button disabled={intPage===1?true:false} className='btn'>이전</button>
            </Link>
            <span>{intPage}/{lastPage}</span>
            <Link to={intPage===lastPage ?`${path}?page=lastPage`: `${path}?page=${intPage+1}`}>
                <button disabled={intPage===lastPage?true:false}  className='btn'>다음</button>
            </Link>
        </div>
    )
}

export default Pagenation