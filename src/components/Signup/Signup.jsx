import React, { useState } from 'react';
import './Signup.css';
import backArrow from '../../assets/images/back.svg'



const Signup = () => {

    const [formData, setFormData] = useState({firstName: "", lastName: "", password: "", confirmPassword: ""});

    const [signupSuccess, setSignupSuccess] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value}));
    }

    const handleSignUp = (event) => {
        event.preventDefault();

        setSignupSuccess(true);

        setTimeout(() => {
            setSignupSuccess(false);
        }, 3000)
    }

  return (
    <div className="signupContainer">
        <div className="backArrow">
            <a href="">
                <img src={backArrow} alt="back arrow" />
                <p>Back</p>
              </a>
        </div>
        <div className='signupWrapper'>
          <form action="" onSubmit={handleSignUp}>
            <div className="signupContent">
                <h3>Sign up</h3>
                <h4>Get started with Shortly</h4>
                {signupSuccess && (
            <div className='sign'>
                <p>Login successful!</p>
            </div>
            )}
            </div>
            <div className='username'>
                <label htmlFor="firstName">
                    First Name
                    <input type="text" id='firstName' name='firstName' onChange={handleChange}/>
                </label>
                <label htmlFor="lastName">
                    Last Name
                    <input type="text" id='lastName' name='lastName' onChange={handleChange}/>
                </label>
            </div>
            <label htmlFor="password">
                Password
                <input type="password" id='password' name='password' onChange={handleChange}/>
            </label>
            <label htmlFor="confirmPassword">
                Confirm Password
                <input type="password" id='confirmPassword' name='confirmPassword' onChange={handleChange}/>
            </label>
            <div className="signupBtn">
                <button type='submit'>Signup</button>
            </div>
            <div className="account">
                <p>Already have an account?</p>
                <a href="">Sign in</a>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Signup
