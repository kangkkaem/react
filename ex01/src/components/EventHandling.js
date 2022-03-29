import React, { useState} from 'react'

const EventHandling = () => {
    const [isToggle, setIsToggle] = useState(false);
  return (
    <div>
        <button onClick={()=>setIsToggle(!isToggle)}>
            {isToggle ? 'ON':'OFF'}
        </button>
    </div>
  )
}

export default EventHandling;