import React, { useState } from 'react'
import List from './List';


const Header = (birthdays, setBirthdays) => {

  return (
    <div>
      <h1>{birthdays.length} Birthdays today</h1>          
    </div>
  )
}

export default Header;