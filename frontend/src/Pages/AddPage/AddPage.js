import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AddPageComponents from '../../Components/AddPageComponents/AddPageComponents';
import Footer from '../../Layout/Footer/Footer';
import Navbar from '../../Layout/Navbar/Navbar';


function AddPage() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Add Page</title>
                </Helmet>
            </HelmetProvider>
            <Navbar/>
            <AddPageComponents/>
            <Footer/>
        </>
    )
}

export default AddPage