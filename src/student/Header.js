import React from 'react'
import {FaUserCircle} from 'react-icons/fa'
import './Header.css'
const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className="left">
        <div className="logo">
          <FaUserCircle size={40}/>
        </div>
        <div className="username">
          <a href=''>username my profile</a>
        </div>
        </div>
        <div className="right">
          <a href=''>create post</a>
          <a href=''>my posts</a>
          <a href=''>logout</a>
        </div>
      </div>
    </div>
  )
}

export default Header