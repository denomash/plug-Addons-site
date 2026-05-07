import React from 'react'
import './about.section.css'

import aboutImg from '../../assets/about.png'
import team from '../../assets/users.svg'
import cloud from '../../assets/cloud-computing.svg'
import lock from '../../assets/lock.svg'
import location from '../../assets/location.svg'

import AboutCards from './AboutCards'
import useReveal from '../../hooks/useReveal'

const SERVICES = [
    { num: '01', label: 'Strategy' },
    { num: '02', label: 'Design' },
    { num: '03', label: 'Development' },
    { num: '04', label: 'Support' },
]

const FEATURES = [
    { title: 'Team', avatar: team },
    { title: 'Cloud', avatar: cloud },
    { title: 'Secure', avatar: lock },
    { title: 'Location', avatar: location },
]

const NumberedCard = ({ num, label, delay }) => {
    const ref = useReveal()
    return (
        <div ref={ref} className='reveal numbered-card' data-delay={delay}>
            <div className='numbered'>{num}</div>
            <div className='numbered-service'>{label}</div>
        </div>
    )
}

const AboutBusiness = () => {
    const imgRef = useReveal()
    const copyRef = useReveal()

    return (
        <section className='about-section'>
            <div className='container'>
                <div className='about-section__content'>
                    <div ref={imgRef} className='reveal reveal--left about-section__media'>
                        <img className='about-section__media-img' src={aboutImg} alt='About our business' />
                    </div>
                    <div ref={copyRef} className='reveal reveal--right about-section__copy'>
                        <h3 className='business__header u-margin-bottom-medium'>About Our Business</h3>
                        <p className='about-section__paragraph'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris.
                        </p>
                        <p className='about-section__paragraph'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button className='btn-about btn-yellow'>See More</button>
                    </div>
                </div>

                <div className='numbered-cards'>
                    {SERVICES.map((s, idx) => (
                        <NumberedCard key={s.num} num={s.num} label={s.label} delay={idx + 1} />
                    ))}
                </div>

                <div className='about-cards'>
                    {FEATURES.map((f, idx) => (
                        <AboutCards key={f.title} title={f.title} avatar={f.avatar} delay={idx + 1} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutBusiness
