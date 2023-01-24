import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./style.scss"

function Navbar() {
  return (
    <nav>
        <div className='topnav'>
            <NavLink to={"/"}><h2>OneSchool</h2></NavLink>
            <ul>
              <li><NavLink to={"/"}>Home</NavLink></li>
              <li><NavLink to={"/addpage"}>Add</NavLink></li>
            </ul>
            <Link to={"/"}><button>Contact Us</button></Link>
        </div>
    </nav>  
  )
}

export default Navbar