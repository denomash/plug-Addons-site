import React from 'react'
import Header from './Header/Header'
import BusinessCards from './BusinessSection/BusinessCards'
import AboutBusiness from './AboutSection/AboutBusiness'
import TeamSection from './TeamSection/TeamSection'

const Main = () => {
    return (
        <div>
            <Header />
            <BusinessCards />
            <AboutBusiness />
            <TeamSection />
        </div>
    )
}

export default Main
