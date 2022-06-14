import {  SpinnerRoundOutlined } from 'spinners-react'
import {  useAppSelector } from '../app/hooks'
import ProjectComponent from '../components/Project'

const Projects = () => {
  const {all:projects,loading} = useAppSelector(state=> state.projects)
  return (
   <div className='min-h-screen w-100 flex flex-col'>

      <	SpinnerRoundOutlined className='mx-auto my-auto h-100 ' enabled={loading}/>

    
      <div className='grid grid-cols-3 gap-2 mx-auto animate-entrance'>
     

        {
          projects.map(project =><ProjectComponent  key={project.id} project={project}/>)
        }
      </div>
   </div>
 
  )
}

export default Projects