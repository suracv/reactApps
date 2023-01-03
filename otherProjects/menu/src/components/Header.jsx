import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div>
      <div className="nav-area">
        <Link to="/" className="logo">
          IT PORTAL
        </Link>
        <Navbar/>
      </div>      
    </div>
  )
}

export default Header
