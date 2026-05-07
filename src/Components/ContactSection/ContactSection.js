import React from 'react'
import './contact.section.css'
import useReveal from '../../hooks/useReveal'

const ContactSection = () => {
    const headRef = useReveal()
    const formRef = useReveal()

    return (
        <section className='contact-section'>
            <div className='contact-section__container container'>
                <h2 ref={headRef} className='reveal contact-section__header'>
                    Instant Contact
                </h2>
                <form
                    ref={formRef}
                    className='reveal contact-section__form'
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        className='contact-section__form--input'
                        type='text'
                        name='name'
                        placeholder='Name'
                        required
                    />
                    <input
                        className='contact-section__form--input'
                        type='email'
                        name='email'
                        placeholder='Email Address'
                        required
                    />
                    <input
                        className='contact-section__form--input'
                        type='tel'
                        name='phone'
                        placeholder='Phone'
                    />
                    <button type='submit' className='contact-section__form--btn'>
                        Sign Up Now
                    </button>
                </form>
            </div>
        </section>
    )
}

export default ContactSection
