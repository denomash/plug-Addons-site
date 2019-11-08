import React from 'react'

import staff4 from '../../assets/staff-4.png'
import './portfolio.css'

const Portfolio = () => {
    return (
        <div className='portfolio-section'>
            <div className='portfolio-section__projects'>

                <div className='portfolio-section__projects--container'>
                    <div className='portfolio-section__projects-row'>
                        <div className='portfolio-section__projects-row--num'>20</div>
                        <p className='portfolio-section__projects-row--desc'>Award Won</p>
                    </div>

                    <div  className='portfolio-section__projects-row'>
                        <div className='portfolio-section__projects-row--num'>300+</div>
                        <p className='portfolio-section__projects-row--desc'>Complete Projects</p>
                    </div>
                </div>

                <div className='portfolio-section__projects--container'>
                    <div className='portfolio-section__projects-row'>
                        <div className='portfolio-section__projects-row--num'>34</div>
                        <p className='portfolio-section__projects-row--desc'>Employees</p>
                    </div>

                    <div  className='portfolio-section__projects-row'>
                        <div className='portfolio-section__projects-row--num'>245</div>
                        <p className='portfolio-section__projects-row--desc'>Happy Clientsn</p>
                    </div>
                </div>
                
            </div>
            
            {/* Portfolio bio */}
            <div className='portfolio-section__bio'>
                <div className='portfolio-section__designer-info'>
                    <div className='team-section__images--staff-img u-margin-bottom-small'>
                        <img className='' src={staff4} alt='staff 1' />
                    </div>
                    <p className='business__info portfolio-section__info u-center-text u-margin-bottom-medium'> Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.</p>
                    <div className='portfolio-section__designer-line u-margin-bottom-medium'></div>
                    <h1 className='business__info portfolio-section__designer-name to-white u-margin-bottom-small'>Shariah Hossain</h1>
                    <h5 className='team-section__bio-title to-white'>UI/UX Designer</h5>

                <div className='portfolio-section__circle '>
                    <div className='arrow left'></div>
                </div>
                </div>
            </div>

            
        </div>
    )
}

export default Portfolio
