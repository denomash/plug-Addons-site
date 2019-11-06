import React from 'react'

const Card = (props) => {
    return (
        <div  className='business__card-section business__info-content u-margin-bottom-medium'>

            <div className='business__card-2'>
                <div className='business__card-img u-margin-bottom-small'>
                    <img className='business__card-avatar' src={props.avatar} alt='meeting' />
                </div>
                <div className='business__card-header-2 u-margin-bottom-small'>
                    {props.title}
                </div>
                <div className='business__card-content-2'>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua.
                </div>

            </div>
        </div>
    )
}

export default Card
