import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container container'>
                <div className='footer__content col-4-of-4'>
                    <div className='footer__content-header--container u-margin-bottom-small'>
                        <div className='footer__content-line'></div>
                        <h2 className='footer__content-header'>ABOUT ZEROR</h2>
                    </div>
                    <p className='business__info u-margin-bottom-small'>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua.
                    </p>

                    <div className=' u-margin-top-small'>
                        <div className='footer__content-header--container  u-margin-bottom-small'>
                            <div className='footer__content-line'></div>
                            <div className='footer__content-header'>Newsletter Signup</div>
                        </div>
                    </div>
                    {/* <div> */}
                        <input className='footer__content--form u-margin-bottom-small' type='email' placeholder='Email' />
                        <div className='footer__content--submit'>Submit</div>

                    {/* </div> */}
                </div>
                <div className='col-4-of-4'></div>
                <div className='col-4-of-4'></div>
                <div className='col-4-of-4'></div>
            </div>
            
        </div>
    )
}

export default Footer
