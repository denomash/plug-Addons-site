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
                    <h3 className='about-cards__content--body-title u-margin-top-small u-margin-bottom-small'>
                        {props.title}
                    </h3>
                    <p className='business__info u-center-text u-margin-bottom-big '>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed diam nonumy. 
                            
                    </p>
                    <button className='btn-business btn-yellow u-margin-bottom-small'>Learn More</button>
                </div>

            </div>
        </Fragment>
    )
}

export default AboutCards
