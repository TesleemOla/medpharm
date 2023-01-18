import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa"
import "./styles/Loginpage/login.scss"
import logo from "./images/logo-blue.svg"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login =()=>{
  const navigate = useNavigate()
    const [formvalues, setFormvalues] = useState({
        username: "",
        password: ""
    })
    const handleSubmit=(e)=>{
      e.preventDefault()
      if(!formvalues.email && !formvalues.password){
        setErrors({email: "Please enter an email to continue",
        password: "Please enter a password"})
      }else if(!formvalues.password) {
        setErrors({password: "Please enter a password"})
      }else{
        setErrors({})
        axios.post('https://medipharm-test.herokuapp.com/api/login',{...formvalues})
        .then(res=> {
          // save user to session storage              
            sessionStorage.setItem("user",JSON.stringify(res.data.data))
          setSuccess(true)
          setFormvalues({username:'', password:''})
          navigate("/", {replace: true})
        })
        .catch(err=>{
          setErrors({final:"Email or password incorrect"})
          console.log(err.message)
        })
        }
}
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
          <form className="d-flex_jcc-aic d-flex_fd"
          onSubmit={(e)=>{handleSubmit(e)}}>
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
              <button className="submit-btn">Login</button>
            </div>
          </form>
          <p className="foot"> &copy; Drug Monitoring 2021</p>
        </section>
      </main>
    );
}

export default Login;