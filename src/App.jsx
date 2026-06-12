import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [heading, setHeading] = useState('')
  const [description, setDescription] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({heading, description})

    setTask(copyTask)

    setHeading('')
    setDescription('')
  }
  const deleteNote = (idx) =>{
    const copyTask = [...task]

    copyTask.splice(idx,1);

    setTask(copyTask)
  }

  return (
    <div className='bg-black text-white h-screen lg:flex'>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex flex-col gap-5 p-10 items-start lg:w-1/2'>

        <h1 className='text-4xl font-bold'>Add Notes</h1>

        <input
          className='border-2 p-3 w-full outline-none rounded'
          type="text" 
          placeholder='Enter Notes Heading'
          value = {heading}
          onChange={(e) => {
            setHeading(e.target.value)
          }}
          
        />

        <textarea 
          className='border-2 p-3 w-full h-32 outline-none'
          name="" 
          id="" 
          placeholder='Enter Details'
          value = {description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
          >
        </textarea>

        <button className='border-2 active:scale-95 p-3 w-full bg-white text-black rounded'> Add Notes</button>
      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
          {task.map(function (elem, idx) {
            
            return <div key={idx} className='flex justify-between flex-col items-start relative bg-cover h-52 w-40 rounded-xl text-black pt-9 pb-4 px-4 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.heading}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.description}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
