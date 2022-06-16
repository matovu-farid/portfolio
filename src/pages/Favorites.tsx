import { useEffect } from 'react'
import { addFavSearchText, searchFav } from '../app/features/favs'
import {  useAppDispatch, useAppSelector } from '../app/hooks'
import { search } from '../app/features/projects'
import Projects from '../components/Projects'

const Favourites = () => {
  const {loading,favs,searched,searchText} = useAppSelector(state=> state.favorites)
  const dispatch  = useAppDispatch()
  useEffect(()=>{
    dispatch(searchFav(searchText))
  },[favs, searchText])


  return (
    <Projects all={favs} searched={searched} loading={loading} addSearchText={addFavSearchText} />

 
  )
}

export default Favourites