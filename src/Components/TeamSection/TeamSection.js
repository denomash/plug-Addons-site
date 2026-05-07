import React, { useState } from 'react'

import designer from '../../assets/UI-UX.png'
import ayo from '../../assets/ayo.jpg'
import staff1 from '../../assets/staff-1.png'
import staff2 from '../../assets/staff-2.png'
import staff3 from '../../assets/staff-3.png'
import staff4 from '../../assets/staff-4.png'
import './team.section.css'
import useReveal from '../../hooks/useReveal'

const MEMBERS = [
    { id: 'ayo', image: ayo, name: 'Jhon Cena', role: 'UI/UX Designer' },
    { id: 's1', image: staff1, name: 'Sarah King', role: 'Developer' },
    { id: 's2', image: staff2, name: 'Mark Lee', role: 'Marketing Lead' },
    { id: 's3', image: staff3, name: 'Ada Nelson', role: 'Product Manager' },
    { id: 's4', image: staff4, name: 'Liam Fox', role: 'Strategist' },
]

const TeamSection = () => {
    const [activeId, setActiveId] = useState(MEMBERS[0].id)
    const active = MEMBERS.find((m) => m.id === activeId) || MEMBERS[0]

    const imagesRef = useReveal()
    const bioRef = useReveal()

    return (
        <section className='team-section'>
            <div className='team-section__container container'>
                <div ref={imagesRef} className='reveal reveal--left team-section__images'>
                    <ul className='team-section__avatars'>
                        {MEMBERS.map((m) => (
                            <li
                                key={m.id}
                                className={`team-section__avatar${m.id === activeId ? ' is-active' : ''}`}
                                onClick={() => setActiveId(m.id)}
                                onMouseEnter={() => setActiveId(m.id)}
                            >
                                <img src={m.image} alt={m.name} />
                            </li>
                        ))}
                    </ul>
                    <div className='team-section__feature'>
                        <img
                            key={active.id}
                            className='team-section__feature-img'
                            src={designer}
                            alt='Featured team member'
                        />
                    </div>
                </div>

                <div ref={bioRef} className='reveal reveal--right team-section__bio'>
                    <div className='team-section__bio-inner' key={active.id}>
                        <h2 className='team-section__bio-name'>{active.name}</h2>
                        <span className='team-section__bio-line'></span>
                        <p className='team-section__bio-title'>{active.role}</p>
                        <p className='team-section__bio-info'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection
