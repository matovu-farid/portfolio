import React from 'react'
import { Link } from 'react-router-dom'
import SideLink from './SideLink'
import { AiFillHome } from 'react-icons/ai';
import { MdFavorite } from 'react-icons/md';
import { GoDiffAdded } from 'react-icons/go';
import { ADDPROJECTROUTE, ADDSKILLROUTE, FAVOURITESROUTE, HOMEROUTE, SKILLSROUTE } from '../helpers/constants';


const Sidebar = () => {
  
  return (
    <div className='h-full min-h-screen bg-slate-900 text-white flex flex-col pt-24 text-start'>
      <SideLink icon={<AiFillHome/>} to={HOMEROUTE} text='Home'></SideLink>
      <SideLink icon={<MdFavorite/>} to={FAVOURITESROUTE} text='Favourites'></SideLink>
      <SideLink icon={<GoDiffAdded/>} to={ADDPROJECTROUTE} text='Add Project'></SideLink>
      <SideLink icon={<GoDiffAdded/>} to={SKILLSROUTE} text='Skills'></SideLink>
      <SideLink icon={<GoDiffAdded/>} to={ADDSKILLROUTE} text='Add Skills'></SideLink>
    </div>
  )
}

export default Sidebar