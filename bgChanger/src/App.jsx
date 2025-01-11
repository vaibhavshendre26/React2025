import { useState } from 'react'

function App() {
  let [bgClr, setbgClr] = useState("pink")

  

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:bgClr}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py2
        rounded-xl'>

          <button onClick={()=>setbgClr("red")} className='outline-none px-4 py-1  rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>

          <button onClick={()=>setbgClr("green")} className='outline-none px-4 py-1  rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>

          <button onClick={()=>setbgClr("blue")} className='outline-none px-4 py-1  rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>

          <button onClick={()=>setbgClr("olive")} className='outline-none px-4 py-1  rounded-full text-white shadow-lg' style={{backgroundColor:"olive"}}>Olive</button>

          <button onClick={()=>setbgClr("gray")} className='outline-none px-4 py-1  rounded-full text-white shadow-lg' style={{backgroundColor:"gray"}}>Gray</button>

          <button onClick={()=>setbgClr("yellow")} className='outline-none px-4 py-1  rounded-full text-white shadow-lg' style={{backgroundColor:"yellow"}}>Yellow</button>

          <button onClick={()=>setbgClr("purple")} className='outline-none px-4 py-1  rounded-full text-white shadow-lg' style={{backgroundColor:"purple"}}>Purple</button>

          <button onClick={()=>setbgClr("white")} className='outline-none px-4 py-1  rounded-full text-white shadow-lg' style={{backgroundColor:"white"}}>White</button>

          <button onClick={()=>setbgClr("gray")} className='outline-none px-4 py-1  rounded-full text-white shadow-lg' style={{backgroundColor:"gray"}}>Gray</button>

          <button onClick={()=>setbgClr("yellow")} className='outline-none px-4 py-1  rounded-full text-white shadow-lg' style={{backgroundColor:"yellow"}}>Yellow</button>



        </div>


      </div>

    </div>
  )
}

export default App
