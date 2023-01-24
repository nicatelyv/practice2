import React from 'react'
import "./style.scss"

function MessageUsSection() {
  return (
    <section className='MessageUsSection'> 
        <div className='MessageUsSectionMain'>
            <h2>Message Us</h2>
            <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
            <div>
                <input id='fname' type={"text"} placeholder='First name'/>
                <input id='lname' type={"text"} placeholder='Last name'/>
            </div>
            <input type={"text"} placeholder='Subject'/>
            <input type={"text"} placeholder='Email'/>
            <input id='writeinp' type={"text"} placeholder='Write your message here.'/>
            <button>SEND MESSAGE</button>
        </div>
    </section>
  )
}

export default MessageUsSection