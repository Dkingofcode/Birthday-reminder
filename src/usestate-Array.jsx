import { data } from './data';
import React, { useState} from 'react';

const UseStateArray = () => {
    const [items, setItems] = useState(data);
     
   const removeItem = (id) => {
     setItems(items.filter((item) => item.id !== id))
   } 

   const clearAllItems = () => {
    setItems([]);
   }

    return(
        <>
        <h2> Array Example</h2>
          {items.map((item) => {
            const {id, name} = item;
            console.log(item);
             return(
              <li key={id}>
               <h2>{name}</h2>
               <button onClick={() => removeItem(id)}>Remove</button>
               </li>
               )
         })} 
         <button onClick={clearAllItems}>Clear All</button>
      </>
    )
}

export default UseStateArray;





















