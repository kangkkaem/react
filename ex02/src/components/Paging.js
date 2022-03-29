import React from 'react'

const Paging = ({onNext, onPrev, page, last}) => {
  return (
    <div>
        <button onClick={onPrev} disabled={page===1 ? true:false}>이전</button>
        <span>{page}</span>
        <button onClick={onNext} disabled={page===last ? true:false}>다음</button>
    </div>
  )
}

export default Paging