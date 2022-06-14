import React from 'react'
import {Link} from 'react-router-dom'

interface Props {
  to: string;
  text: string;
}

const SideLink = ({to,text}:Props) => {
  return (
    <Link className='hover:invert bg-gray-900 px-3' to={to}>{text}</Link>
  )
}

export default SideLink