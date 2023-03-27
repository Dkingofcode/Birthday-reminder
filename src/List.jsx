import React, { useState } from 'react';
import { ledger } from './data';
import Singlebirthday from './Singlebirthday';


const List = ({ birthdays, setBirthdays, clearBirthdays, removeBirthday }) => {
    
    return (
    <div>
      {birthdays.map((birthday) => {
        return( 
            <>
        <Singlebirthday key={birthday.id} {...birthday} removeBirthday={removeBirthday} />
         </>
        )  

    })}
    <button onClick={clearBirthdays}>CLear All</button>
    </div>
  )
}

export default List;