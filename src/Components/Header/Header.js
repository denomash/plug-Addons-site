import React from 'react'

import logo from '../../assets/logo.png'
import './header.css'

const Header = () => {
    return (
        <div className='header u-margin-bottom-medium'>
            {/* <div className="header__clip"></div> */}
            <div className="header__top container">
                <div className="header__logo">
                    <div className='logo__container'>
                        <img className='logo' src={logo} alt='logo' />
                    </div>
                    <span className="header__logo--text">PlugAddons</span>
                </div>
                <div className="header__nav">
                    <ul>
                        <li>Home</li>
                        <li>Features</li>
                        <li>Pages</li>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                    
                </div>
            </div>

            <div className='header__content container'>
                <h1 className='header__content--header u-margin-bottom-small'>Accelerate your Business</h1>
                <p className='header__content--info u-margin-bottom-medium'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                     nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className='button'>Click Me</button>
            </div>
        </div>
    )
}

export default Header
