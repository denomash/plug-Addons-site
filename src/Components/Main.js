import React from 'react'
import Header from './Header/Header'
import BusinessCards from './BusinessSection/BusinessCards'
import AboutBusiness from './AboutSection/AboutBusiness'
import TeamSection from './TeamSection/TeamSection'
import Portfolio from './Portfolio/Portfolio'
import NewsSection from './NewsSection/NewsSection'
import ContactSection from './ContactSection/ContactSection'
import Footer from './Footer/Footer'

const Main = () => {
    return (
        <div>
            <Header />
            <BusinessCards />
            <AboutBusiness />
            <TeamSection />
            <Portfolio />
            <NewsSection />
            <ContactSection />
            <Footer />
        </div>
    )
}

export default Main
