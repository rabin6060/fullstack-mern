import React from 'react'

export default function Button({title}) {
  return (
    <div>
        <button className='bg-hoverColor px-5 py-3 rounded-lg text-white hover:bg-backGroundColor transition duration-200 ease-in-out'>
            {title}
        </button>
    </div>
  )
}
