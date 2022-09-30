import React, {useState} from "react";
import "./styles/login.scss"
import logo from "./images/logo.svg"

const Login =()=>{
    const [formvalues, setFormvalues] = useState({
        email: "",
        password: ""
    })
    return (
      <main className="login">
        <div className="header d-flex jcc-aic">
          <img src={logo} alt="logo"/>
          <span>Medipharm assistant</span>
        </div>
        <section className="form-div">
          <div className="heading">
            <p>Welcome back!</p>
            <h2>Login to your account</h2>
          </div>
          <form>
            <div className="input-grp">
              <label htmlFor="email">Email Address</label>
              <div className="input-item">
                <input
                  type="text"
                  placeholder="Please enter your email"
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
                  type="password"
                  placeholder="*********"
                  onChange={(e) =>
                    setFormvalues({ ...formvalues, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="forgot">
              <a>Forgot password?</a>
            </div>
            <button className="submit-btn">Login</button>

          </form>
          <p> Medipharm Assistant 2022</p>
        </section>
      </main>
    );
}

export default Login;