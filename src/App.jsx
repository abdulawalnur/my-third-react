import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './Team'
import Friends from './Friends'

function App() {
  function handleClick (){
    alert('hello word')
  }
  const handleClickButton = () =>{
    alert('kingfa')
  }
  const addToFunction =(num) =>{
    alert(num+5);
  }
  

  return (
    <>
       
      <h1> React Core Concept 2</h1>
      <Friends></Friends>
      <Team></Team>

      <button onClick={handleClick}>Click</button>
      <button onClick={handleClickButton}>Etao click</button>
      <button onClick={() =>{alert('opps')}}>Clickthis</button>
      <button onClick={() => alert(3)}>Push</button>
      
    </>
  )
}

export default App
