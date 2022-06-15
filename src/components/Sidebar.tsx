import React from 'react'
import { Link } from 'react-router-dom'
import SideLink from './SideLink'
import { AiFillHome } from 'react-icons/ai';
import { MdFavorite } from 'react-icons/md';
import { GoDiffAdded } from 'react-icons/go';


const Sidebar = () => {
  
  return (
    <div className='h-full min-h-screen bg-slate-900 text-white flex flex-col pt-24 text-start'>
      <SideLink icon={<AiFillHome/>} to='/' text='Home'></SideLink>
      <SideLink icon={<MdFavorite/>} to='/favorites' text='Favourites'></SideLink>
      <SideLink icon={<GoDiffAdded/>} to='/addproject' text='Add Project'></SideLink>
    </div>
  )
}

export default Sidebar