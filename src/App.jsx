import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ErrorExample from './error-example'
import UseStateArray from './usestate-Array'
import UseStatecount from './useState-hook'
import UseStateObject from './usestate-Object'
import Header from './Header'
import List from './List'
import { ledger } from './data';


function App() {
  const [birthdays, setBirthdays] = useState(ledger);
  
  const clearBirthdays = () => {
    setBirthdays([]);
  }

  const removeBirthday = (id) => {
   setBirthdays(birthdays.filter((birthday) => birthday.id !== id))
  }

  return (
    <div className="App">
      <Header birthdays={birthdays} />
      <List birthdays={birthdays} setBirthdays={setBirthdays} clearBirthdays={clearBirthdays} removeBirthday={removeBirthday} />
    </div>
  )
}

export default App;
