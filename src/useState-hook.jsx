import React, { useState } from 'react';

const UseStatecount = () => {
  const [count, setCount] = useState()
   
  const handleClick = () => {
    setCount(count + 1);
   }

  return(  
    <>
  <h2>You clicked {count} times</h2>
  <button type='button' className='btn' onClick={handleClick}>click ne</button>
  </>
  )
}


export default UseStatecount;