import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { Project } from '../interfaces/project'

const ProjectDetails = () => {
  const {id} = useParams()
  const projects = useAppSelector(state=>state.projects.all)
  const favs = useAppSelector(state=>state.favorites.favs)
  const findProject= (projects: Project[])=> projects.find((project)  => project.id === id);
  
  let project = findProject(favs) || findProject(projects)
  
  return (
    <div className='text-gray-900 flex flex-col gap-4 justify-center min-h-screen'>
      {

      project &&
      <div >
        <div className='w-1/2 mx-auto'>
          <h2 className='text-5xl font-bold'>{project.name}</h2>
          <p>{project.description}</p>
        </div>
        <div >
          <img className='shadow-2xl object-contain w-100 lg:w-1/2 mx-auto' 
          src={project.image} alt={project.name} />
        </div>

      </div>
      }
    </div>
  )
}

export default ProjectDetails