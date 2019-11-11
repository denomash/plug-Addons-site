import React from 'react'
import Header from './Header/Header'
import BusinessCards from './BusinessSection/BusinessCards'
import AboutBusiness from './AboutSection/AboutBusiness'
import TeamSection from './TeamSection/TeamSection'
import Portfolio from './Portfolio/Portfolio'
import NewsSection from './NewsSection/NewsSection'

const Main = () => {
    return (
        <div>
            <Header />
            <BusinessCards />
            <AboutBusiness />
            <TeamSection />
            <Portfolio />
            <NewsSection />
        </div>
    )
}

export default Main
