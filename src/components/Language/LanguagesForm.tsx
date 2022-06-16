import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../app/hooks'
import {  addImage, addName } from '../../app/features/working_language'

const LanguagesForm = () => {
  const dispatch = useDispatch()
  const language = useAppSelector(state=> state.workingLanguage)
  const setName = (name:string)=> dispatch(addName(name))
  const setImage = (image:string)=> dispatch(addImage(image))

  return (
    <form className='w-full h-full flex flex-col p-3 text-start justify-start gap-2'>
      <input className='rounded-lg' type="text" id="name" placeholder='title' name="name" value={language.name} onChange={(e)=>setName((e.target as HTMLInputElement).value)} />

      <div className=' flex flex-col'>
        <p className='bold'>Links</p>

      <input className='rounded-lg'  type="text" id="image" placeholder='image' name="image" defaultValue={language.image} onChange={(e)=>setImage((e.target as HTMLInputElement).value)} />
      </div>
    </form>
  )
}

export default LanguagesForm