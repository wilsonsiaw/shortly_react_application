import React from 'react';
import brandLogo from '../../assets/images/icon-brand-recognition.svg';
import detailedLogo from '../../assets/images/icon-detailed-records.svg';
import fullyLogo from '../../assets/images/icon-fully-customizable.svg';
import './Card.css';

const Card = () => {

  return (
    <div className='card-wrapper'>
      <div className='card1'>
        <div className="cardImg">
          <img src={brandLogo} alt="brand recognition logo" />
        </div>
        <div className="cardContent">
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>
      </div>
      <div className='card2'>
        <div className="cardImg">
          <img src={detailedLogo} alt="detailed records logo" />
        </div>
        <div className="cardContent">
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
          </p>
        </div>
      </div>
      <div className='card3'>
        <div className="cardImg">
          <img src={fullyLogo} alt="fully customizable logo" />
        </div>
        <div className="cardContent">
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default Card
