import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="header__top container">
                <div className="header__logo">
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
