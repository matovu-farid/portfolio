import React, { FormEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { deleteAProject, updateAProject } from '../app/projects';
import { resetWorkingProject, setWorkingProject } from '../app/working_project';
import { Project } from '../interfaces/project';
import Button from './Button';
import ProjectsForm from './ProjectsForm';

const Options = (props: { project: Project}) => {
  const project = props.project;
  const dispatch = useAppDispatch()
  const {name, description,image,github} = useAppSelector(state=>state.workingProject)

  const onDelete = ()=>{
    dispatch(deleteAProject(project))
    toast.success("Project deleted successfully")
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
    dispatch(resetWorkingProject())
    toggleDialog()
    // toast.success("Project updated successfully")
  }
  const onCancel = ()=>{
    dispatch(resetWorkingProject())
    toggleDialog()
  }
  const [open,setOpen] = useState(false)
  const toggleDialog = ()=>{
    setOpen(!open)
  }
  useEffect(()=>{
    if(open) dispatch(setWorkingProject(project))
  },[open])
 
  return (
    <div className='flex gap-1'>
      <dialog  className='shadow-2xl' open={open}>
        <ProjectsForm/>
        <div className='flex gap-2 justify-end'>
          <Button text='Update' onClick={onUpdate}></Button>
          <Button text='Cancel' onClick={onCancel}></Button>
        </div>
      </dialog>
      
        <Button text='Edit' onClick={toggleDialog}/>
        <Button text='Delete' onClick={onDelete}/>
    </div>
  )
}

export default Options