import React, { Fragment } from 'react'
import './footer.css'
import useReveal from '../../hooks/useReveal'

const WORKFLOW = ['Management', 'Tasks', 'Report', 'Statistics', 'Business', 'Solutions', 'Topics', 'Design']
const PAGES = ['Home', 'About Us', 'Portfolio', 'Services', 'Team', 'Solutions', 'Shop', 'Privacy Policy']
const NEWS = [
    { day: '04', month: 'FEB', title: 'National television' },
    { day: '12', month: 'MAR', title: 'New product launch' },
    { day: '28', month: 'APR', title: 'Industry award won' },
]

const SectionHeader = ({ children }) => (
    <div className='footer__content-header--container u-margin-bottom-small'>
        <span className='footer__content-line'></span>
        <h2 className='footer__content-header'>{children}</h2>
    </div>
)

const FooterColumn = ({ children, className = '', delay }) => {
    const ref = useReveal()
    return (
        <div ref={ref} className={`reveal ${className}`} data-delay={delay}>
            {children}
        </div>
    )
}

const Footer = () => {
    return (
        <Fragment>
            <footer className='footer'>
                <div className='footer__container container'>
                    <FooterColumn className='footer__col footer__col--about' delay={1}>
                        <SectionHeader>ABOUT ZEROR</SectionHeader>
                        <p className='footer__text u-margin-bottom-small u-margin-top-small'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <SectionHeader>Newsletter Signup</SectionHeader>
                        <form className='footer__newsletter' onSubmit={(e) => e.preventDefault()}>
                            <input className='footer__newsletter-input' type='email' placeholder='Email' />
                            <button type='submit' className='footer__newsletter-btn'>Submit</button>
                        </form>
                    </FooterColumn>

                    <FooterColumn className='footer__col' delay={2}>
                        <SectionHeader>Workflow</SectionHeader>
                        <ul className='footer__list'>
                            {WORKFLOW.map((item) => (
                                <li key={item}><a href='/'>{item}</a></li>
                            ))}
                        </ul>
                    </FooterColumn>

                    <FooterColumn className='footer__col' delay={3}>
                        <SectionHeader>Pages</SectionHeader>
                        <ul className='footer__list'>
                            {PAGES.map((item) => (
                                <li key={item}><a href='/'>{item}</a></li>
                            ))}
                        </ul>
                    </FooterColumn>

                    <FooterColumn className='footer__col' delay={4}>
                        <SectionHeader>Latest News</SectionHeader>
                        {NEWS.map((n) => (
                            <div key={n.day + n.title} className='footer__news'>
                                <div className='footer__news-img'>
                                    <p className='footer__news-date'>{n.day}</p>
                                    <p className='footer__news-month'>{n.month}</p>
                                </div>
                                <div className='footer__news-content'>
                                    <span className='footer__news-title'>{n.title}</span>
                                    <div className='footer__news-meta'>
                                        <span className='footer__news-meta-item'>
                                            <span className='footer__admin-avatar'></span>
                                            Admin
                                        </span>
                                        <span className='footer__news-meta-item'>
                                            <span className='footer__date-avatar'></span>
                                            January
                                        </span>
                                    </div>
                                    <a className='footer__news-more' href='/'>MORE +</a>
                                </div>
                            </div>
                        ))}
                    </FooterColumn>
                </div>
            </footer>

            <div className='footer-bottom'>
                Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            </div>
        </Fragment>
    )
}

export default Footer
