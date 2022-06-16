import React from 'react'
import { Link } from 'react-router-dom'
import SideLink from './SideLink'
import { AiFillHome } from 'react-icons/ai';
import { MdFavorite } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';
import { BsSpeakerFill } from 'react-icons/bs';
import { MdAddCircle } from 'react-icons/md';
import { RiHealthBookFill } from 'react-icons/ri';
import { GoDiffAdded } from 'react-icons/go';
import { ADDLANGUAGEROUTE, ADDPROJECTROUTE, ADDSKILLROUTE, FAVOURITESROUTE, HOMEROUTE, LANGUAGESROUTE, SKILLSROUTE } from '../helpers/constants';


const Sidebar = () => {
  
  return (
    <div className='h-full min-h-screen bg-slate-900 text-white flex flex-col pt-24 text-start'>
      <SideLink icon={<AiFillHome/>} to={HOMEROUTE} text='Home'></SideLink>
      <SideLink icon={<MdFavorite/>} to={FAVOURITESROUTE} text='Favourites'></SideLink>
      <SideLink icon={<GoDiffAdded/>} to={ADDPROJECTROUTE} text='Add Project'></SideLink>
      <SideLink icon={<ImBooks/>} to={SKILLSROUTE} text='Skills'></SideLink>
      <SideLink icon={<RiHealthBookFill/>} to={ADDSKILLROUTE} text='Add Skills'></SideLink>
      <SideLink icon={<BsSpeakerFill/>} to={LANGUAGESROUTE} text='Languages'></SideLink>
      <SideLink icon={<MdAddCircle/>} to={ADDLANGUAGEROUTE} text='Add Languages'></SideLink>

    </div>
  )
}

export default Sidebar