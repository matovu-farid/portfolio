import React from 'react'

const Button = (props: {text: string, onClick: () => void}) => {
  return (
    <button onClick={props.onClick} className='bg-gray-900  hover:invert text-white py-1 px-2 border-none rounded-sm'>{props.text}</button>
  )
}

export default Button