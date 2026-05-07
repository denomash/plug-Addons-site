import React, { useEffect, useRef, useState } from 'react'

import staff4 from '../../assets/staff-4.png'
import staff1 from '../../assets/staff-1.png'
import staff2 from '../../assets/staff-2.png'
import './portfolio.css'
import useReveal from '../../hooks/useReveal'

const STATS = [
    { num: 20, suffix: '', label: 'Awards Won' },
    { num: 300, suffix: '+', label: 'Complete Projects' },
    { num: 34, suffix: '', label: 'Employees' },
    { num: 245, suffix: '', label: 'Happy Clients' },
]

const TESTIMONIALS = [
    {
        avatar: staff4,
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        name: 'Shariah Hossain',
        role: 'UI/UX Designer',
    },
    {
        avatar: staff1,
        quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        name: 'Sarah King',
        role: 'Product Lead',
    },
    {
        avatar: staff2,
        quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        name: 'Mark Lee',
        role: 'Strategy Director',
    },
]

const Counter = ({ target, suffix, run }) => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        if (!run) return undefined
        const duration = 1400
        const start = performance.now()
        let raf

        const tick = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(target * eased))
            if (progress < 1) raf = requestAnimationFrame(tick)
        }

        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [run, target])

    return (
        <span>
            {value}
            {suffix}
        </span>
    )
}

const Portfolio = () => {
    const statsWrapRef = useRef(null)
    const [statsVisible, setStatsVisible] = useState(false)
    const [index, setIndex] = useState(0)

    const bioRef = useReveal()

    useEffect(() => {
        const node = statsWrapRef.current
        if (!node || typeof IntersectionObserver === 'undefined') {
            setStatsVisible(true)
            return undefined
        }
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setStatsVisible(true)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.3 }
        )
        observer.observe(node)
        return () => observer.disconnect()
    }, [])

    const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length)
    const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

    const current = TESTIMONIALS[index]

    return (
        <section className='portfolio-section'>
            <div ref={statsWrapRef} className='portfolio-section__projects'>
                <div className='portfolio-section__stats'>
                    {STATS.map((s, idx) => (
                        <div key={s.label} className='portfolio-section__stat' style={{ animationDelay: `${idx * 90}ms` }}>
                            <div className='portfolio-section__stat-num'>
                                <Counter target={s.num} suffix={s.suffix} run={statsVisible} />
                            </div>
                            <p className='portfolio-section__stat-label'>{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div ref={bioRef} className='reveal reveal--right portfolio-section__bio'>
                <div className='portfolio-section__designer'>
                    <button className='portfolio-section__circle' aria-label='Previous' onClick={prev}>
                        <span className='arrow left'></span>
                    </button>

                    <div className='portfolio-section__designer-info' key={index}>
                        <div className='portfolio-section__avatar'>
                            <img src={current.avatar} alt={current.name} />
                        </div>
                        <p className='portfolio-section__quote u-center-text'>{current.quote}</p>
                        <span className='portfolio-section__divider'></span>
                        <h4 className='portfolio-section__name'>{current.name}</h4>
                        <p className='portfolio-section__role'>{current.role}</p>
                    </div>

                    <button className='portfolio-section__circle' aria-label='Next' onClick={next}>
                        <span className='arrow right'></span>
                    </button>
                </div>

                <div className='portfolio-section__dots'>
                    {TESTIMONIALS.map((t, idx) => (
                        <button
                            key={t.name}
                            className={`portfolio-section__dot${idx === index ? ' is-active' : ''}`}
                            aria-label={`Go to testimonial ${idx + 1}`}
                            onClick={() => setIndex(idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
