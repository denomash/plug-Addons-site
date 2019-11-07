import React, { Fragment } from 'react'


const AboutCards = (props) => {
    return (
        <Fragment>
            <div className='about-cards__content'>
                <div className='up-arrow '></div>
                <div className='about-cards__content--top'>
                    <div className='about-cards__content--top-img'>
                        <img  className='about-cards__content--top-avatar' src={props.avatar} alt='Team' />
                    </div>
                </div>
                <div className='about-cards__content--body'>
                    <h3 className='about-cards__content--body-title'>
                        {props.title}
                    </h3>
                    <p className='business__info u-center-text u-margin-bottom-big '>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed diam nonumy. 
                            
                    </p>
                    <div className='u-margin-bottom-medium'>
                        <button className='btn-business btn-yellow'>Learn More</button>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default AboutCards
