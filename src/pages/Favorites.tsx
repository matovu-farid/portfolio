import { useEffect } from 'react'
import { addFavSearchText } from '../app/favs'
import {  useAppDispatch, useAppSelector } from '../app/hooks'
import { search } from '../app/projects'
import Projects from '../components/Projects'

const Favourites = () => {
  const {loading,favs,searched,searchText} = useAppSelector(state=> state.favorites)
  const dispatch  = useAppDispatch()
  useEffect(()=>{
    dispatch(search(searchText))
  },[favs, searchText])


  return (
    <Projects all={favs} searched={searched} loading={loading} addSearchText={addFavSearchText} />

 
  )
}

export default Favourites