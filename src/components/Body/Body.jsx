import React from 'react';
import './Body.css';
import Card from '../Card/Card';

const Body = () => {
  return (
    <div className='container'>
      <div className="body-wrapper">
          <div className="heading">
              <h3>Advanced Statistics</h3>
          </div>
          <div className="para">
              <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
          </div>
      </div>
      <Card />
    </div>
  )
}

export default Body
