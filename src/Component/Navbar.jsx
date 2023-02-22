import React from 'react'
import './navbar.css';

const Navbar = () => {
  return (
    <div className='nav' >
      <span>Logo</span>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Services</li>
        </ul>
        <div id='searchdiv'>
          <input type="search" />
          <button >search</button>

        </div>
    </div>
  )
}

export default Navbar