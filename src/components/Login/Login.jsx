import React, { useState } from 'react';
import './Login.css';
import back from '../../assets/images/back.svg'
import { Link } from 'react-router-dom';

const Login = () => {

  const [formData, setFormData] = useState({email: "", password: ""});
  const [loginSuccess, setLoginSuccees] = useState(false);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevFormData) => ({...prevFormData, [name]: value}));
  }

  const handleLogin = (event) => {
    event.preventDefault();

    setLoginSuccees(true);

    setTimeout(() => {
      setLoginSuccees(false);
    }, 3000)
  }

  return (
    <div className='loginContainer'>
      <div className='back'>
          <Link to='/'>
            <img src={back} alt="back arrow" />
            <p>Back</p>
          </Link>
        </div>
      <div className="formWrapper">
        <div className="loginContent">
          <h3>Login</h3>
          <h4>Get started with Shortly</h4>
          {loginSuccess && (
          <div className='login'>
            <p>Login successful!</p>
          </div>
        )}
        </div>
        <form action="" onSubmit={handleLogin}>
          <label htmlFor="email">
            Email
            <input type="email" id='email' name='email' value={formData.email}  onChange={handleChange}/>
          </label>
          <label htmlFor="password">
            Password
            <input type="password" id='password' name='password' value={formData.password} onChange={handleChange}/>
          </label>
          <div className="forgot">
            <Link to='/Password'>Forgot password?</Link>
          </div>
          <div className="loginBtn">
            <button type='submit'>Login</button>
          </div>
          <div className='signup'>
            <p>Don't have an account yet?</p>
            <Link to='/Signup'>Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
