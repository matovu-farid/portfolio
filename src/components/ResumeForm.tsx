import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../app/hooks'
import { addTitle, addIntro, addName } from '../app/features/working_resume'

const ResumesForm = () => {
  const dispatch = useDispatch()
  const resume = useAppSelector(state=> state.workingResume)
  const setName = (name:string)=> dispatch(addName(name))
  const setTitle = (title:string)=> dispatch(addTitle(title))
  const setIntro = (intro:string)=> dispatch(addIntro(intro))

  return (
    <form className='w-full h-full flex flex-col p-3 text-start justify-start gap-2'>
      <input className='rounded-lg' type="text" id="name" placeholder='title' name="name" value={resume.name} onChange={(e)=>setName((e.target as HTMLInputElement).value)} />

        <textarea className='rounded-lg' id='title' placeholder='title' name='title' value={resume.title}   cols={30} rows={10} onChange={(e)=>setTitle((e.target as HTMLTextAreaElement).value)}></textarea>
      <div className=' flex flex-col'>
        <p className='bold'>Links</p>

      <input className='rounded-lg'  type="text" id="intro" placeholder='intro' name="intro" defaultValue={resume.intro} onChange={(e)=>setIntro((e.target as HTMLInputElement).value)} />
      </div>
    </form>
  )
}

export default ResumesForm