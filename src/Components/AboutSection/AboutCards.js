import React from 'react'
import useReveal from '../../hooks/useReveal'

const AboutCards = ({ title, avatar, delay = 0 }) => {
    const ref = useReveal()

    return (
        <div ref={ref} className='reveal about-cards__content' data-delay={delay}>
            <div className='about-cards__arrow'></div>
            <div className='about-cards__top'>
                <div className='about-cards__icon'>
                    <img className='about-cards__icon-img' src={avatar} alt={title} />
                </div>
            </div>
            <div className='about-cards__body'>
                <h3 className='about-cards__title'>{title}</h3>
                <p className='about-cards__copy u-center-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy.
                </p>
                <button className='btn-business btn-yellow about-cards__cta'>Learn More</button>
            </div>
        </div>
    )
}

export default AboutCards
