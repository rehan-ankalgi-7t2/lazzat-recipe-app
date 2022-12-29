import React from 'react'
import './header.css'
import icon from '../assets/icons/cooking.png';

const Header = () => {
  return (
    <header className='header'>
        <h1><img src={icon} alt=''/>Lazzat</h1>
    </header>
  )
}

export default Header