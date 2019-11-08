import React from 'react'

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
            
            <div className='portfolio-section__bio'></div>

            
        </div>
    )
}

export default Portfolio
