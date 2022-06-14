import React from 'react'
import {Link, NavLink} from 'react-router-dom'

interface Props {
  to: string;
  text: string;
}
interface LinkData {
  isActive: boolean;
}
const common = 'px-3 transition-colors hover:bg-white hover:text-gray-900 '
const SideLink = ({to,text}:Props) => {
  return (
    <NavLink  className={({isActive})=>common+(isActive?'bg-white text-gray-900 ':'text-white bg-gray-900')} 
    to={to}>{text}</NavLink>
  )
}

export default SideLink