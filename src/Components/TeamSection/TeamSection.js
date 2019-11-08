import React from 'react'

import designer from '../../assets/UI-UX.png'
import ayo from '../../assets/ayo.jpg'
import staff1 from '../../assets/staff-1.png'
import staff2 from '../../assets/staff-2.png'
import staff3 from '../../assets/staff-3.png'
import staff4 from '../../assets/staff-4.png'
import './team.section.css'

const TeamSection = () => {
    return (
        <div className='team-section'>
            <div className='team-section__container container'>
                <div className='team-section__images'>
                    <div className='team-section__images--staff'>
                        <div className='team-section__images--staff-img-1'>
                            <img className='team-section__images--staff-avatar' src={ayo} alt='staff 1' />

                        </div>

                        <div className='team-section__images--staff-img'>
                            <img className='' src={staff1} alt='staff 1' />
                        </div>

                        <div className='team-section__images--staff-img'>
                            <img className='' src={staff2} alt='staff 1' />

                        </div>

                        <div className='team-section__images--staff-img'>
                            <img className='' src={staff3} alt='staff 1' />
                        </div>
                        
                        <div className='team-section__images--staff-img'>
                            <img className='' src={staff4} alt='staff 1' />
                        </div>

                    </div>
                    <div className='team-section__images--designer'>
                        <img className='team-section__images--designer-img' src={designer} alt='The designer' />
                    </div>

                </div>
                <div className='team-section__bio'></div>
            </div>
        </div>
    )
}

export default TeamSection
