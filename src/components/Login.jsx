import React, {useState} from "react";
import { FaRegEye } from "react-icons/fa"
import "./styles/Loginpage/login.scss"
import logo from "./images/logo-blue.svg"

const Login =()=>{
    const [formvalues, setFormvalues] = useState({
        email: "",
        password: ""
    })
    const [showPassword, setShowPassword] = useState(false)
    return (
      <main className="login">
        <section className="form-div">
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>
            <p className="welcome">Welcome Back!</p>
            <h2 className="login-txt">Login to your account</h2>
          <form className="d-flex_jcc-aic d-flex_fd">
            <div className="input-grp">
              <label htmlFor="email">Email Address</label>
                <div className="input-item">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  
                  onChange={(e) =>
                    setFormvalues({ ...formvalues, email: e.target.value })
                  }
                />
                </div>
            </div>
            <div className="input-grp">
              <label htmlFor="password">Password</label>
                <div className="input-item">
                <input
                  type={!showPassword?"password":"text"}
                  placeholder="*********"
                  
                  onChange={(e) =>
                    setFormvalues({ ...formvalues, email: e.target.value })
                  }
                />
                <FaRegEye className="eye" 
                onClick={()=> setShowPassword(!showPassword)}/>
                </div>

            </div>
            
              <a className="forgot">Forgot password?</a>
            
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