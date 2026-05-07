import React from 'react'

import ayo from '../../assets/ayo-1.jpg'
import fez from '../../assets/fez.jpg'
import jak from '../../assets/jak.jpg'

import './news.section.css'
import NewsSectionCard from './NewsSectionCard'
import useReveal from '../../hooks/useReveal'

const ITEMS = [
    { image: ayo, primary: true },
    { image: fez, primary: true },
    { image: jak, primary: false },
]

const NewsSection = () => {
    const headRef = useReveal()
    const introRef = useReveal()

    return (
        <section className='news-section'>
            <div className='container'>
                <div className='news-section__head'>
                    <h3 ref={headRef} className='reveal business__header u-margin-bottom-medium'>
                        News Section
                    </h3>
                    <p ref={introRef} className='reveal business__intro u-center-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>

                <div className='news-section__cards'>
                    {ITEMS.map((item, idx) => (
                        <NewsSectionCard
                            key={idx}
                            image={item.image}
                            primary={item.primary}
                            delay={idx + 1}
                        />
                    ))}
                </div>

                <div className='news-section__dots--container u-margin-top-big u-margin-bottom-big'>
                    <div className='news-section__dots'>
                        <span className='news-section__dots-1'></span>
                        <span className='news-section__dots-1'></span>
                        <span className='news-section__dots-2'></span>
                        <span className='news-section__dots-1'></span>
                        <span className='news-section__dots-1'></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsSection
