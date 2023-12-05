import React, {useState} from 'react';
import './Password.css';
import newArrow from '../../assets/images/back.svg';
import { Link } from 'react-router-dom';

const Password = () => {

    const [value, setValue] = useState('');
    const [passwordReset, setPasswordReset] = useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setPasswordReset(true);

        setTimeout(() => {
            setPasswordReset(false);
        }, 3000);
    }

  return (
    <div className='psRecoveryContainer'>
      <div className="psRecoveryWrapper">
          <form action="" onSubmit={handleSubmit}>
            <div className="psRecoveryContent">
                <h3>Forgot Password</h3>
                <p>Enter the email address you used when you joined <br />and we'll send you instructions to reset your password</p>
                {passwordReset && (
                    <div className='psRecoveryCondition'>
                        <p>Recovery code sent to email address</p>
                    </div>
                )}
            </div>
            <label htmlFor="psRecovery">
                Email
                <input type="email" id='emailRecovery' name='emailRecovery' onChange={handleChange} />
            </label>
            <div className="psRecovertBtn">
                <button type='submit'>Send Recovery Code</button>
            </div>
            <div className="backTo">
                <Link to='/Login'>
                    <img src={newArrow} alt="back arrow" />
                    <p>Back to sign in</p>
                </Link>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Password
