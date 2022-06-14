import { useEffect } from 'react'
import {  SpinnerRoundOutlined } from 'spinners-react'
import { addFavSearchText } from '../app/favs'
import {  useAppDispatch, useAppSelector } from '../app/hooks'
import { search } from '../app/projects'
import ProjectComponent from '../components/Project'
import SearchField from '../components/SearchField'

const Favourites = () => {
  const {loading,favs,searched:projects,searchText} = useAppSelector(state=> state.favorites)
  const dispatch  = useAppDispatch()
  useEffect(()=>{
    dispatch(search(searchText))
  },[favs, searchText])


  return (
   <div className='min-h-screen w-100 flex flex-col'>

      <	SpinnerRoundOutlined className='mx-auto my-auto h-100 ' enabled={loading}/>
      <SearchField searchFunction={addFavSearchText} disabled={loading}></SearchField>
    
      <div className='grid grid-cols-3 gap-2 mx-auto animate-entrance'>
     

        {
          ((projects) || favs).map(project =><ProjectComponent  key={project.id} project={project}/>)
        }
      </div>
   </div>
 
  )
}

export default Favourites