import React from 'react';

import ayo from '../../assets/ayo-1.jpg';
import fez from '../../assets/fez.jpg';
import jak from '../../assets/jak.jpg';

import './news.section.css';
import NewsSectionCard from './NewsSectionCard';

const NewsSection = () => {
    return (
        <div className='news-section'>
            <div className='container'>
                <div className='u-margin-top-medium'>
                    <h3 className='business__header u-margin-bottom-medium'>News Section</h3>
                    
                    <div className='business__info u-center-text'>

                        <p className='business__info-content u-center-text'>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. 
                        </p>
                    </div>
                    
                </div>

                <div className='news-section__cards u-margin-top-medium'>
                    <NewsSectionCard image={ayo} primary='primary' />
                    <NewsSectionCard image={fez} primary='primary' />
                    <NewsSectionCard image={jak} secondary='secondary' />
                </div>

                <div className='news-section__dots--container u-margin-top-big u-margin-bottom-big'>
                    <div className='news-section__dots'>
                        <div className='news-section__dots-1'></div>
                        <div className='news-section__dots-1'></div>
                        <div className='news-section__dots-2'></div>
                        <div className='news-section__dots-1'></div>
                        <div className='news-section__dots-1'></div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default NewsSection
