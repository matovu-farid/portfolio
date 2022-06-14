import React from 'react'
import {Link, NavLink} from 'react-router-dom'

interface Props {
  to: string;
  text: string;
  icon: JSX.Element;
}
interface LinkData {
  isActive: boolean;
}
const common = 'flex gap-2 px-3 py-2 transition-colors hover:bg-white hover:text-gray-900 '
const SideLink = ({to,text,icon}:Props) => {
  return (
    <NavLink  className={({isActive})=>common+(isActive?'bg-white text-gray-900 ':'text-white bg-gray-900')} 
    to={to}>
      <span className='my-auto'>{icon}</span>
      <span>{text}</span>
    </NavLink>
  )
}

export default SideLink