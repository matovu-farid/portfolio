import React from 'react'
import { Link } from 'react-router-dom'
import SideLink from './SideLink'

const Sidebar = () => {
  return (
    <div className='h-full bg-slate-900 text-white flex flex-col gap-2 pt-24 fixed text-start'>
      <SideLink to='/' text='Home'></SideLink>
      <SideLink to='/addproject' text='Add Project'></SideLink>
    </div>
  )
}

export default Sidebar