import React from 'react'
import './index.css'

 const Header = () => {
  return <nav className='navbar'>
      <div className='website-nav-container'>
      <p className='website-logo'>
            Bookmyseat
      </p>
      <input type="text" placeholder='Search for Movies' className='search-input'/>
      </div>
  </nav>
}


export default Header
