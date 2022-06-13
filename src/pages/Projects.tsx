import { SpinnerDotted } from 'spinners-react'
import {  useAppSelector } from '../app/hooks'
import ProjectComponent from '../components/Project'

const Projects = () => {
  const {all:projects,loading} = useAppSelector(state=> state.projects)
  return (
   <div className='min-h-screen w-100 flex flex-col'>

      <SpinnerDotted className='mx-auto my-auto h-100 ' enabled={loading}/>

    
      <div className='flex flex-col gap-2 mx-auto max-w-lg animate-entrance'>
     

        {
          projects.map(project =><ProjectComponent key={project.id} project={project}/>)
        }
      </div>
   </div>
 
  )
}

export default Projects