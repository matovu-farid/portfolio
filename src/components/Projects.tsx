import React from 'react'
import {  useAppSelector } from '../app/hooks'
import ProjectComponent from './Project'

const Projects = () => {
  const projects = useAppSelector(state=> state.projects.all)
  return (
    <div className='flex flex-col gap-2 mx-auto max-w-lg'>
      {
        projects.map(project =><ProjectComponent key={project.id} project={project}/>)
      }
    </div>
  )
}

export default Projects