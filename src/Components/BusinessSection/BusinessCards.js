import React from 'react'
import './styles.css'

import meeting from '../../assets/meetup-white.svg'
import growth from '../../assets/growth.svg'
import moneyBag from '../../assets/money-bag.svg'
import profit from '../../assets/profit.svg'
import Card from './Card'
import useReveal from '../../hooks/useReveal'

const CARDS = [
    { title: 'Meeting', avatar: meeting, highlighted: true },
    { title: 'Business Growth', avatar: growth },
    { title: 'Investment', avatar: moneyBag },
    { title: 'Profit', avatar: profit },
]

const BusinessCards = () => {
    const headRef = useReveal()
    const infoRef = useReveal()

    return (
        <section className='business-section container u-margin-bottom-big'>
            <div className='u-margin-bottom-medium'>
                <h3 ref={headRef} className='reveal business__header u-margin-bottom-medium'>
                    Our Business
                </h3>
                <p ref={infoRef} className='reveal business__intro u-center-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
            </div>

            <div className='business__grid'>
                {CARDS.map((card, idx) => (
                    <Card
                        key={card.title}
                        avatar={card.avatar}
                        title={card.title}
                        highlighted={card.highlighted}
                        delay={idx + 1}
                    />
                ))}
            </div>
        </section>
    )
}

export default BusinessCards
