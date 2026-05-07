import React from 'react'
import useReveal from '../../hooks/useReveal'

const Card = ({ avatar, title, content, highlighted, delay = 0 }) => {
    const ref = useReveal()

    return (
        <div
            ref={ref}
            className={`reveal business__card${highlighted ? ' business__card--primary' : ''}`}
            data-delay={delay}
        >
            <div className='business__card-img'>
                <img className='business__card-avatar' src={avatar} alt={title} />
            </div>
            <div className='business__card-title'>{title}</div>
            <p className='business__card-content'>
                {content || `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </p>
        </div>
    )
}

export default Card
