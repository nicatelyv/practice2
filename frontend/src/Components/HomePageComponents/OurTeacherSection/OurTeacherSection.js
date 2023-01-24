import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"

function OurTeacherSection() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:8888/users")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
  return (
    <section className='OurTeacherSection'>
        <h2>Our Teachers</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
        <div className='ourTeachersMainDiv'>
            {data.map(element=>(
                <div className='teacherCard'>
                    <img alt='foto' src={element.imgUrl}/>
                    <h2 id='name'>{element.name}</h2>
                    <h3 id='title'>{element.title}</h3>
                    <p id='description'>{element.description}</p>
                    <Link to={"/details/"+ element._id}><button>Details</button></Link>
                </div>
            ))}
        </div>
    </section>
  )
}

export default OurTeacherSection