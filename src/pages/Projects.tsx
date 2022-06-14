import { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import {  SpinnerRoundOutlined } from 'spinners-react'
import {  useAppSelector } from '../app/hooks'
import { search } from '../app/projects'
import ProjectComponent from '../components/Project'
import SearchField from '../components/SearchField'

const Projects = () => {
  const {loading,all,searched:projects} = useAppSelector(state=> state.projects)
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState('')
  useEffect(()=>{
    (all.length>0)&& dispatch(search(searchText))
  },[searchText]) 

  return (
   <div className='min-h-screen w-100 flex flex-col'>

      <	SpinnerRoundOutlined className='mx-auto my-auto h-100 ' enabled={loading}/>
      <SearchField disabled={loading}></SearchField>
    
      <div className='grid grid-cols-3 gap-2 mx-auto animate-entrance'>
     

        {
          (projects || all).map(project =><ProjectComponent  key={project.id} project={project}/>)
        }
      </div>
   </div>
 
  )
}

export default Projects