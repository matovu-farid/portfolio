import React, { FormEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { deleteAProject, updateAProject } from '../app/projects';
import { Project } from '../interfaces/project';
import Button from './Button';
import ProjectsForm from './ProjectsForm';

const Options = (props: { project: Project}) => {
  const project = props.project;
  const dispatch = useAppDispatch()
  const {name, description,image,github} = useAppSelector(state=>state.workingProject)

  const onDelete = ()=>{
    dispatch(deleteAProject(project))
  }
  const onUpdate = ()=>{
    const newProject = {
      id: project.id,
      name: name,
      description: description,
      image: image,
      github: github

    }
    dispatch(updateAProject(newProject))
    toggleDialog()
  }
  const [open,setOpen] = useState(false)
  const toggleDialog = ()=>{
    setOpen(!open)
  }
  
 
  return (
    <div className='flex gap-1'>
      <dialog  className='shadow-2xl' open={open}>
        <ProjectsForm/>
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