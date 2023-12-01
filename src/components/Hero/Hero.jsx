import React from 'react';
import './Hero.css';
import heroImage from '../../assets/images/illustration-working.svg';

const Hero = () => {
  return (
    <div className='hero-wrapper'>
        <div className="content">
            <div>
                <h1>More than just shorter links</h1>
            </div>
            <div>
                <p>Build your brand's recognition and get detailed
                    insights on how your links are performing
                </p>
            </div>
            <div className='hero-btn'>
                <button type='button'>Get Started</button>
            </div>
        </div>
        <div className='img'></div>
    </div>
  )
}

export default Hero
