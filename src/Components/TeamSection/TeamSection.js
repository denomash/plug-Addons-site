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
                <div className='team-section__bio'>
                    <div className='team-section__bio--container'>
                        <h2 className='team-section__bio-name u-margin-bottom-small'>Jhon Cena</h2>
                        <div className='team-section__bio-line u-margin-bottom-small'></div>
                        <p className='team-section__bio-title u-margin-bottom-small'>UI/UX Designer</p>
                        <p className='team-section__bio-info business__info u-margin-top-small u-center-text'>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam
                            incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamSection
