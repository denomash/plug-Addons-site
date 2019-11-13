import React, { Fragment } from 'react'
import './footer.css'

const Footer = () => {
    return (
        <Fragment>
        <div className='footer'>
            <div className='footer__container container'>
                <div className='footer__content col-4-of-4'>
                    <div className='footer__content--1'>
                        <div className='footer__content-header--container u-margin-bottom-small'>
                            <div className='footer__content-line'></div>
                            <h2 className='footer__content-header'>ABOUT ZEROR</h2>
                        </div>
                        <p className='business__info u-margin-bottom-small  u-margin-top-small'>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed 
                            do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua.
                        </p>
                    </div>

                    <div  className='footer__content--2'>
                        <div className=' u-margin-top-small'>
                            <div className='footer__content-header--container  u-margin-bottom-small'>
                                <div className='footer__content-line'></div>
                                <div className='footer__content-header'>Newsletter Signup</div>
                            </div>
                        </div>

                        <input className='footer__content--form u-margin-bottom-small' type='email' placeholder='Email' />
                        <div className='footer__content--submit'>Submit</div>

                    </div>
                </div>


                <div className='footer__more col-4-of-4'>
                        <div className='footer__content-header--container u-margin-bottom-small'>
                            <div className='footer__content-line'></div>
                            <h2 className='footer__content-header'>Workflow</h2>
                        </div>


                    <div className='business__info footer__more--content u-margin-top-small'>
                        <p>Management</p>
                        <p>Tasks</p>
                        <p>Report</p>
                        <p>Statistics</p>
                        <p>Business</p>
                        <p>Solutions</p>
                        <p>Topics</p>
                        <p>Design</p>
                    </div>

                    
                </div>


                <div className='footer__more col-4-of-4'>
                    <div className='footer__content-header--container u-margin-bottom-small'>
                        <div className='footer__content-line'></div>
                        <h2 className='footer__content-header'>Pages</h2>
                    </div>

                    <div className='business__info footer__more--content u-margin-top-small'>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Portfolio</p>
                        <p>Services</p>
                        <p>Team</p>
                        <p>Solutions</p>
                        <p>Shop</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>


                <div className='footer__more col-4-of-4'>
                    <div className='footer__content-header--container u-margin-bottom-small'>
                        <div className='footer__content-line'></div>
                        <h2 className='footer__content-header'>Latest News</h2>
                    </div>

                    <div className='footer__news u-margin-top-small'>
                        <div className='footer__news-img'>
                            <p className='footer__news-date'>04</p>
                            <p className='footer__news-month'>FEB</p>
                        </div>

                        <div className='footer__news-content'>
                            <div className='footer__img-desc footer__content-header'>National television</div>
                            <div className='footer__img-info'>
                                
                                <div className='footer__img-desc business__info'>
                                    <div className='footer__admin-avatar'></div>
                                    Admin
                                </div>

                                
                                <div className='footer__img-desc business__info'>
                                    <div className='footer__date-avatar'></div>
                                    January
                                </div>

                            </div>
                            <div className='footer__img-desc footer__content-header'>MORE +</div>
                        </div>
                        
                    </div>

                    <div className='footer__news u-margin-top-small'>
                        <div className='footer__news-img'>
                            <p className='footer__news-date'>04</p>
                            <p className='footer__news-month'>FEB</p>
                        </div>

                        <div className='footer__news-content'>
                            <div className='footer__img-desc footer__content-header'>National television</div>
                            <div className='footer__img-info'>
                                
                                <div className='footer__img-desc business__info'>
                                    <div className='footer__admin-avatar'></div>
                                    Admin
                                </div>

                                
                                <div className='footer__img-desc business__info'>
                                    <div className='footer__date-avatar'></div>
                                    January
                                </div>

                            </div>
                            <div className='footer__img-desc footer__content-header'>MORE +</div>
                        </div>
                        
                    </div>

                    <div className='footer__news u-margin-top-small'>
                        <div className='footer__news-img'>
                            <p className='footer__news-date'>04</p>
                            <p className='footer__news-month'>FEB</p>
                        </div>

                        <div className='footer__news-content'>
                            <div className='footer__img-desc footer__content-header'>National television</div>
                            <div className='footer__img-info'>
                                
                                <div className='footer__img-desc business__info'>
                                    <div className='footer__admin-avatar'></div>
                                    Admin
                                </div>

                                
                                <div className='footer__img-desc business__info'>
                                    <div className='footer__date-avatar'></div>
                                    January
                                </div>

                            </div>
                            <div className='footer__img-desc footer__content-header'>MORE +</div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
        
        <div className='footer-bottom'>
            Copyright &copy; 2019. All rights reserved.
        </div>
        </Fragment>
    )
}

export default Footer
