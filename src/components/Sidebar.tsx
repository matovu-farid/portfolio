import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='h-full bg-slate-900 text-white flex flex-col gap-2 px-2 pt-24 fixed text-start'>

      <Link to={'/'}>Home</Link>  
      <Link to={'/addproject'}>Add Project</Link>   
    </div>
  )
}

export default Sidebar