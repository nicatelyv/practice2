import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../Layout/Footer/Footer';
import Navbar from '../../Layout/Navbar/Navbar';
import "./style.scss"

function DetailPage() {
    const [datam, setDatam] = useState([])
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:8888/users/${id}`)
            .then(res => res.json())
            .then(res => setDatam(res))
    }, [id])
    return (
        <>
            <Navbar/>
            <section className='detailspage'>
                <img alt='foto' src={datam.imgUrl}/>
                <h1>{datam.name}</h1>
                <h3>{datam.title}</h3>
                <Link to={"/"}><button>Back to Site</button></Link>
            </section>
            <Footer/>
        </>
    )
}

export default DetailPage