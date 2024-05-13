import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import {signUp , login} from '../../firebase.js'

const Login = () => {

  const [signState, setSignState] = useState("Sign In")
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const user_auth = async () => {
    if(signState === 'Sign In') {
      await login(email, password)
    } else {
      await signUp(name, email, password)
    }
  }

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt=''></img>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState == "Sign Up" ? <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Your name'></input> 
          : null}
          <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email' ></input>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password'></input>
          <button onClick={(e) => {
            e.preventDefault();
            user_auth();
            }}>{signState == "Sign In" ? "Sign In": "Sign Up"}</button>
          <div className="form-help">
            <div className="remember">
              <input type='checkbox' />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState == "Sign In" && <p>New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span></p>}
          {signState == "Sign Up" && <p>Already have an account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
