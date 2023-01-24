import React from 'react'
import "./style.scss"

function LearnFromTheExpert() {
  return (
    <header>
        <div className='headertext'>
            <h1>Learn From The Expert</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
            <a href='/'><button>ADMISSION NOW</button></a>
        </div>
        <div className='headerlogin'>
            <h2>Sign Up</h2>
            <input placeholder='Email Adress'/>
            <input placeholder='Password'/>
            <input placeholder='Re-type Password'/>
            <button>SIGN UP</button>
        </div>
    </header>
  )
}

export default LearnFromTheExpert