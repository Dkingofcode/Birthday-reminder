import React from 'react';
import { useState } from 'react';


const UseStateObject = () => {
    const [object, setObject] = useState({
       name: 'peter',
       age: 24,
       hobby: 'read books',   
    });

    const [number, setNumber] = useState(0)
    // const [name, setName] = useState('grossbare');
    // const [age, setAge] = useState(24);
    // const [hobby, setHobby] = useState('Grinding');

    const changeObject = () => {
        setObject({ name: "frieohrte", age: 14, hobby: "fighting the neihgbours" })
    }

    const changeValue = () => {
        setNumber((currentState) => {
            const newState = currentState + 1;
            return newState
        })
    }

    
    const handleClick = () => {
        setTimeout(() => {
            setNumber((currentValue) => {
                currentValue + 1
            });
        }, 3000);
    }

  return (
    <>
    <div>
     <h2>{object.name}</h2>
     <h4>{object.age}</h4>
     <p>{object.hobby}</p>
     <button onClick={changeObject}>Show </button>
    </div>


    <div>
      <h2>{number}</h2>
      <button onClick={handleClick}>increase</button>
    </div>
    </>
  )
}

export default UseStateObject;