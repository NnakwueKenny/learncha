import React from 'react'

const Nav = () => {
  return (
    <div className='absolute top-0 w-full px-4 py-5 flex justify-between'>
        <button className='flex items-center justify-center text-xl w-12 h-12 md:w-16 md:h-16 border-2 border-dashed border-white hover:border-yellow-400 rounded-full text-white hover:text-yellow-400'>
            <span><i className='fa fa-arrow-left'></i></span>
        </button>
        <button className='flex items-center justify-center text-xl w-12 h-12 md:w-16 md:h-16 border-2 border-dashed border-white hover:border-yellow-400 rounded-full text-white hover:text-yellow-400'>
            <span><i className='fa fa-arrow-right'></i></span>
        </button>
    </div>
  )
}

export default Nav