import React from 'react'
import './about.section.css'

import aboutImg from '../../assets/about.png'

const AboutBusiness = () => {
    return (
        <div className='about-section'>
            <div className='container'>
                <div className='about-section__content u-margin-top-big'>
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
            </div>

            
            
        </div>
    )
}

export default AboutBusiness
