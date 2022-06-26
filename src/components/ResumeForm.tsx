import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../app/hooks'
import { addDescription, addGithub, addImage, addName, WorkingResumeState } from '../app/features/working_resume'
import { Resume } from '../interfaces/resume'

const ResumesForm = () => {
  const dispatch = useDispatch()
  const resume = useAppSelector(state=> state.workingResume)
  const setName = (name:string)=> dispatch(addName(name))
  const setDescription = (description:string)=> dispatch(addDescription(description))
  const setImage = (image:string)=> dispatch(addImage(image))
  const setGithub = (github:string)=> dispatch(addGithub(github))

  return (
    <form className='w-full h-full flex flex-col p-3 text-start justify-start gap-2'>
      <input className='rounded-lg' type="text" id="name" placeholder='title' name="name" value={resume.name} onChange={(e)=>setName((e.target as HTMLInputElement).value)} />

        <textarea className='rounded-lg' id='description' placeholder='description' name='description' value={resume.description}   cols={30} rows={10} onChange={(e)=>setDescription((e.target as HTMLTextAreaElement).value)}></textarea>
      <div className=' flex flex-col'>
        <p className='bold'>Links</p>

      <input className='rounded-lg'  type="text" id="image" placeholder='image' name="image" defaultValue={resume.image} onChange={(e)=>setImage((e.target as HTMLInputElement).value)} />
        <input className='rounded-lg'  type="text" id="github" placeholder='github' name="github" defaultValue={resume.github} onChange={(e)=>setGithub((e.target as HTMLInputElement).value)} />
      </div>
    </form>
  )
}

export default ResumesForm