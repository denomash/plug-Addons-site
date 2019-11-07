import React from 'react'
import './about.section.css'

import aboutImg from '../../assets/about.png'
import team from '../../assets/users.svg'
import cloud from '../../assets/cloud-computing.svg'
import lock from '../../assets/lock.svg'
import location from '../../assets/location.svg'

import AboutCards from './AboutCards'

const AboutBusiness = () => {
    return (
        <div className='about-section'>
            <div className='container'>
                <div className='about-section__content u-margin-top-big u-margin-bottom-big'>
                    <div className='about-section__content--img'>
                        <img className='about-section__content--avatar' src={aboutImg} alt='about image' />
                    </div>
                    <div className='about-section__content--info'>
                        <h3 className='business__header u-margin-bottom-medium u-margin-top-small'>About Our Business</h3>
                        <p className='business__info u-margin-bottom-medium'>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea 
                        </p>

                        <p className='business__info u-margin-bottom-medium'>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea 
                        </p>

                        <p className='business__info u-margin-bottom-medium'>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            
                        </p>

                        <button className='button btn-yellow '>See More</button>
                    </div>

                </div>

                {/* Numbered Cards */}
                <div className='numbered-cards u-margin-bottom-big'>
                    <div className='numbered-card'>
                        <div className='numbered'>01</div>
                        <div className='numbered-service'>Service1</div>
                    </div>

                    <div className='numbered-card'>
                        <div className='numbered'>02</div>
                        <div className='numbered-service'>Service1</div>
                    </div>

                    <div className='numbered-card'>
                        <div className='numbered'>05</div>
                        <div className='numbered-service'>Service1</div>
                    </div>

                    <div className='numbered-card'>
                        <div className='numbered'>04</div>
                        <div className='numbered-service'>Service1</div>
                    </div>
                </div>

                <div className='line-dots u-margin-bottom-big'>
                    <div className='dot-container'>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    </div>
                    <div className='line'></div>
                </div>

                {/* About business cards */}
                <div className='about-cards'>
                    <AboutCards title='Team' avatar ={team} />
                    <AboutCards title='Cloud' avatar ={cloud} />
                    <AboutCards title='Secure' avatar ={lock}  />
                    <AboutCards title='Location' avatar ={location}  />

                </div>


            </div>

            
            
            
        </div>
    )
}

export default AboutBusiness
