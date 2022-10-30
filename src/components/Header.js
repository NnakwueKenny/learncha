import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const toggleMenu = () => {
    document.querySelector('.menu_trigger').click();
  }
  return (
    <header id="header">
      <div className='flex justify-end items-center w-full'>
        <a className='menu_trigger top-0 m-8 mt-10 sm:m-5 w-full cursor-pointer'></a>
      </div>
      <div className="left-part"></div>
      <a id="logo" href="/"></a>
      <a href='./' className='absolute top-24 left-0 w-full flex justify-center text-4xl text-red-400 text-decoration-none' style={{fontFamily: 'Gochi  Hand'}}><Link to='/'>Learncha</Link></a>
      <div className='bar-holder'>
        <nav id="nav">
            <ul>
              <li onClick={toggleMenu}><a className='cursor-pointer'><Link to='/games'>Games</Link></a></li>
              <li onClick={toggleMenu}><a><Link to='/diy'>DIY</Link></a></li>
              <li onClick={toggleMenu}><a><Link to='/resources'>Resources</Link></a></li>
              <li onClick={toggleMenu}><a><Link to='/transcribers'>Transcribers</Link></a></li>
              <li onClick={toggleMenu}><a><Link to='/climate'>Climate</Link></a></li>
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header