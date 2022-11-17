import React, { useState } from "react";
import Cookies from "universal-cookie";
import { FaRegEye } from "react-icons/fa"
import "./styles/Loginpage/login.scss"
import logo from "./images/logo-blue.svg"
import axios from "axios";
import { Link } from "react-router-dom";

const Login =()=>{
  const cookies = new Cookies()
    const [formvalues, setFormvalues] = useState({
        username: "",
        password: ""
    })
    const [errors, setErrors] = useState({})
    const [showPassword, setShowPassword] = useState(false)
    const [success, setSuccess] = useState(false)
    return (
      <main className="login">
        <section className="form-div">
            <img src={logo} alt="logo" className="logo"/>
            <p className="welcome">Welcome Back!</p>
            <p className="error">{errors.final}</p>
            <h2 className="login-txt">Login to your account</h2>
          <form className="d-flex_jcc-aic d-flex_fd">
            <div className="input-grp">
              <label htmlFor="email">Email Address</label>
              <p className="error">{errors.email}</p>
                <div className="input-item">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  value={formvalues.username}
                  onChange={(e) =>
                    setFormvalues({ ...formvalues, username: e.target.value })
                  }
                />
                </div>
            </div>
            <div className="input-grp">
              
              <label htmlFor="password">Password</label>
              <p className="error">{errors.password}</p>
                <div className="input-item">
                <input
                  type={!showPassword?"password":"text"}
                  placeholder="*********"
                  value={formvalues.password}
                  onChange={(e) =>
                    setFormvalues({ ...formvalues, password: e.target.value })
                  }
                />
                <FaRegEye className="eye" 
                onClick={()=> setShowPassword(!showPassword)}/>
                </div>
                  
            </div>
            
              <Link className="forgot">Forgot password?</Link>
            
            <div className="d-flex_jcc-aic">
              <button className="submit-btn" 
              onClick={(e)=>{
                e.preventDefault()
                if(!formvalues.email && !formvalues.password){
                  setErrors({email: "Please enter an email to continue",
                  password: "Please enter a password"})
                }else if(!formvalues.password) {
                  setErrors({password: "Please enter a password"})
                }else{
                  setErrors({})
                  axios.post('https://medipharm-test.herokuapp.com/api/login',
                  {...formvalues})
                  .then(res=> {
                    let token = res.headers.authorization;
                    cookies.set("TOKEN", token, {
                      path:"/"
                    })
                    window.location.href = "/dashboard"
                    setSuccess(!success)
                    setFormvalues({username:'', password:''})
                  })
                  .catch(err=>{
                    setErrors({final: "Please sign up before trying to login"})
                  })
                  }
              }}>Login</button>
            </div>
          </form>
          <p className="foot"> &copy; Drug Monitoring 2021</p>
        </section>
      </main>
    );
}

export default Login;