import React, { useState } from 'react'
import { useAppDispatch } from '../app/hooks';
import { deleteAProject, updateAProject } from '../app/projects';
import { Project } from '../interfaces/project';
import Button from './Button';

const Options = (props: { project: Project}) => {
  const project = props.project;
  const dispatch = useAppDispatch()
  const onDelete = ()=>{
    dispatch(deleteAProject(project))
  }
  const onUpdate = ()=>{
    dispatch(updateAProject(project))
    toggleDialog()
  }
  const [open,setOpen] = useState(false)
  const toggleDialog = ()=>{
    setOpen(!open)
  }
 
  return (
    <div className='flex gap-1'>
      <dialog className='shadow-lg' open={open}>
        <div className='w-full h-full flex flex-col p-3 text-start justify-start'>
          <label  htmlFor="title" className='font-bold'>Name</label>
          <input type="text" id="name" defaultValue={project.name} />
          <label htmlFor="description" className='font-bold'>Description</label>
          <textarea id='description' defaultValue={project.description}   cols={30} rows={10}></textarea>
        </div>
        <div className='flex gap-2 justify-end'>
          <Button text='Update' onClick={onUpdate}></Button>
          <Button text='Cancel' onClick={toggleDialog}></Button>
        </div>
      </dialog>
      <Button text='Edit' onClick={toggleDialog}/>
      <Button text='Delete' onClick={onDelete}/>
    </div>
  )
}

export default Options