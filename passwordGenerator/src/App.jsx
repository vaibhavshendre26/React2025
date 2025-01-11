import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

import { useCallback } from 'react';

function App() {
  const [length, setlength] = useState(8);  
  const [number, setnumber] = useState(false);
  const [character, setcharacter] = useState(false);
  const [password, setpassword] = useState("");


 const passref= useRef(null)


  const passGen = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number) str+="0123456789";
    if(character) str+="!@#$%^&*()_+-={}[]|:?/~";

    for(let i=1; i<=length; i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }

    setpassword(pass)

  },[length,setnumber,setcharacter,setpassword])

  const copyPassToClip=useCallback(()=>{

    passref.current?.select();
    passref.current?.setSelectionRange(0,31);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passGen()
  },[length,setnumber,setcharacter,passGen])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4  my-8 p-4 text-orange-400 bg-gray-500'>
      <h1 className='text-white text-center p-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>

        <input type="text" value={password} className='outline-none w-full py-1 px-3 p-6' placeholder='Password' readOnly ref={passref}/>

        <button onClick={copyPassToClip} className='outline-none bg-blue-800 px-3 py-0.5 shrink-0'>
          Copy  
        </button>

      </div>

      <div className='flex text-sm gap-x-2'>

        <div className='flex items-center gap-x-1'>

          <input type="range" min={8} max={32} value={length} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}} />
          <label >Length:{length}</label>

        </div>  

        <div className='flex items-center gap-x-1'>

          <input type="checkbox"
          defaultChecked={setnumber}
          id='numberInput' 
          onChange={()=>{
            setnumber((prev)=>!prev)
          }}/>

          <label htmlFor='numberInput'>Numbers</label>

        </div>

        <div className='flex items-center gap-x-1'>

          <input type="checkbox"
          defaultChecked={setcharacter}
          id='charInput' 
          onChange={()=>{
            setcharacter((prev)=>!prev)
          }}/>

          <label htmlFor='charInput'>Character</label>

        </div>


        
      </div>
    </div>
    </>
  )
}

export default App
