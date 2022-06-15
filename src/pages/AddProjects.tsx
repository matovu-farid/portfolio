import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addAProject } from '../app/features/projects'
import Button from '../components/Button'
import ProjectsForm from '../components/ProjectsForm'

const AddProjects = () => {
  const dispatch = useAppDispatch()
  const {name, description,image,github} = useAppSelector(state=>state.workingProject)
  const navigate = useNavigate()
  const onAdd = ()=>{
    const newProject = {
      id: '',
      name: name,
      description: description,
      image: image,
      github: github

    }
    dispatch(addAProject(newProject))
    toast.success("Project added successfully")
    navigate('/')
  }
  
  return (
    <div className='mx-auto w-1/2 animate-entrance'>
      <ProjectsForm />
      <div>
        <Button text='Add Project' onClick={onAdd} />
      </div>

    </div>
  )
}

export default AddProjects