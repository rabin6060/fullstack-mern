import React from 'react'

export default function Button({title}) {
  return (
    <div>
        <button className='bg-backGroundColor px-4 py-2 rounded-lg text-white hover:bg-hoverColor transition duration-200 ease-in-out'>
            {title}
        </button>
    </div>
  )
}
