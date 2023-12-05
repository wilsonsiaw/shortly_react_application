import React from 'react';
import './Started.css';
import { useNavigate } from 'react-router-dom';

const Started = () => {

  const navigate = useNavigate()

  return (
    <div className='bgWrapper'>
        <div className="bgContent">
            <div className="bgHeading">
                <h3>Boost your links today</h3>
            </div>
            <div className="bgBtn">
                <button onClick={() => navigate('Signup')}>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Started
