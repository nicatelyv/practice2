import React from 'react'
import Footer from '../../Layout/Footer/Footer'
import Navbar from '../../Layout/Navbar/Navbar'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import LearnFromTheExpert from '../../Components/HomePageComponents/LearnFromTheExpert/LearnFromTheExpert';
import OurProgramsSection from '../../Components/HomePageComponents/OurProgramsSection/OurProgramsSection';
import OurTeacherSection from '../../Components/HomePageComponents/OurTeacherSection/OurTeacherSection';
import MessageUsSection from '../../Components/HomePageComponents/MessageUsSection/MessageUsSection';

function HomePage() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Home Page</title>
                </Helmet>
            </HelmetProvider>
            <Navbar />
            <LearnFromTheExpert/>
            <OurProgramsSection/>
            <OurTeacherSection/>
            <MessageUsSection/>
            <Footer />
        </>
    )
}

export default HomePage