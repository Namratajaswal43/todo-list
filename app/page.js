"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submithandler=(e)=>{
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}]);
    settitle("") 
    setdesc("") 
    console.log(mainTask)
   };
   const deletehandler=(i)=>{
    let copytask=[...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
   }
      let renderTask =<h2> NO TASK AVAILABLE</h2>
  if (mainTask.length>0 ) {
    renderTask= mainTask.map((t,i)=>{
      return (  <li key={i} className='flex items-center justify-between mb-8'>
        <div className='flex justify-between mb-5 w-2/3'> 
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h6 className='text-lg font-medium'>{t.desc}</h6>
        </div>
        <button onClick={()=>{
          deletehandler(i)
        }} className='bg-red-400 text-white px-4 py-2 rounded mb-5 font-bold'>Delete</button>
      </li>
      );
     })
    
  }
  return (
    <>
  <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Namrata's todolist</h1>
  <form onSubmit={submithandler}>
    <input type='text' className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2' placeholder='Enter Title here'  value={title} onChange={(e)=>{
      settitle(e.target.value) }}/>
    <input type='text' className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2' placeholder='Enter description here'value={desc} onChange={(e)=>{
      setdesc(e.target.value) }}/>
    <button className='text-white bg-black px-4 py-3 m-5 text-2xl font-bold rounded'>Add Task</button>
    </form>
    <hr/>
    <div className='p-8 bg-slate-200'>
      <ul>{renderTask}</ul>
    </div>
    </>
  )
}

export default page
