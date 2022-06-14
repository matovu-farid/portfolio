import React, { ChangeEventHandler } from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../app/projects'

const SearchField = () => {
  const dispatch = useDispatch()
  let timeoutId:NodeJS.Timeout |null = null;
  const onChange = (value: string) => {
    timeoutId !== null ? timeoutId.refresh():
     timeoutId= setTimeout(()=>{
      dispatch(search(value))
    },1000)
   
  }

  return (
    <input type="text" onChange={(e)=>onChange(e.target.value)} className='rounded-lg' placeholder='search a project' />
  )
}

export default SearchField