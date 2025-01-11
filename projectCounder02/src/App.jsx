import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  
  const addValue=()=>{   
    if(counter<20){
      setCounter(counter+1);
    }else{
      setCounter(20);
    }
    
    
  }

  const remValue=()=>{
    if(counter>=1){
      setCounter(counter-1);
    }
    else{
      setCounter(0);      
    }
    
  }
  

  return (
    <>
      <h1>Vaibhav Aur React</h1>
      <h3>Conter Value:{counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={remValue}>Remove Value</button>
    </>
  )
}

export default App
