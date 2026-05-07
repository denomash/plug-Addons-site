import React, { useEffect, useState } from 'react'

import logo from '../../assets/logo.png'
import './header.css'

const NAV_ITEMS = ['Home', 'Features', 'Pages', 'Shop', 'Blog', 'Contact']

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    return (
        <header className={`header${scrolled ? ' is-scrolled' : ''}`}>
            <div className={`header__top container${scrolled ? ' is-scrolled' : ''}`}>
                <div className="header__logo">
                    <div className='logo__container'>
                        <img className='logo' src={logo} alt='PlugAddons logo' />
                    </div>
                    <span className="header__logo--text">PlugAddons</span>
                </div>

                <nav className={`header__nav${menuOpen ? ' is-open' : ''}`}>
                    <ul>
                        {NAV_ITEMS.map((item, idx) => (
                            <li
                                key={item}
                                style={{ '--i': idx }}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    className={`header__burger${menuOpen ? ' is-open' : ''}`}
                    aria-label='Toggle menu'
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((v) => !v)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <div className='header__content container'>
                <h1 className='header__content--header'>Accelerate your Business</h1>
                <p className='header__content--info'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <button className='button'>Get Started</button>
            </div>

            <div className='header__scroll-cue' aria-hidden='true'>
                <span></span>
            </div>
        </header>
    )
}

export default Header
