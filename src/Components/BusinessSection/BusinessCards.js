import React from 'react'
import './styles.css'

import meeting from '../../assets/meetup-white.svg'
import growth from '../../assets/growth.svg'
import moneyBag from '../../assets/money-bag.svg'
import profit from '../../assets/profit.svg'
import Card from './Card'

const BusinessCards = () => {
    return (
        <div className='business-section container'>
            <div className='u-margin-bottom-medium'>
                <h3 className='business__header u-margin-bottom-medium'>Our Business</h3>
                
                <div className='business__info u-center-text'>

                    <p className='business__info-content u-center-text'>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim 
                        veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Ut enim ad minim 
                        veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                
            </div>

            <div className='business__cards-col'>
                {/* First 2 cards */}
                <div className='business__cards-item'>
                    <div  className='business__card-section business__info-content u-margin-bottom-medium'>

<div className='business__card'>
    <div className='business__card-img u-margin-bottom-small'>
        <img className='business__card-avatar' src={meeting} alt='meeting' />
    </div>
    <div className='business__card-header u-margin-bottom-small'>
        Meeting
    </div>
    <div className='business__card-content'>
        Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua.
    </div>

</div>
</div>

                    {/* Card 2 */}
                    <Card avatar={growth} title='Business Groth' />

                </div>

                {/* Following 2 cards */}
                <div className='business__cards-item transform' >
                     <Card avatar={moneyBag} title='Investment' />
                     <Card avatar={profit} title='Profit' />
                </div>
            </div>

        </div>
    )
}

export default BusinessCards
