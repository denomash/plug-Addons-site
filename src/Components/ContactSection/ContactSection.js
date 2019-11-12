import React from 'react'
import './contact.section.css'

const ContactSection = () => {
    return (
        <div className='contact-section'>
            <div className='contact-section__container container'>
                <div className='contact-section__header'>Instant Contact</div>
                <div className='contact-section__form u-margin-top-big'>
                    <input className='contact-section__form--input' type='text' id='name' placeholder='Name' />
                    <input className='contact-section__form--input' type='email' id='email' placeholder='Email Adress' />
                    <input className='contact-section__form--input' type='text' id='phone' placeholder='Phone' />
                    <div className='contact-section__form--btn'>Sign Up Now</div>

                </div>

            </div>
        </div>
    )
}

export default ContactSection
