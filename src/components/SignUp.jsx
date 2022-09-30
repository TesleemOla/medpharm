import React, {useState} from 'react'
import "./styles/signup.scss"
import vector from "./images/Vector.svg"

const SignUp = () => {
    const [formvalues, setFormValues] = useState({
        firstname:"",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        checkbox: false
    })
    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(formvalues)
    }
  return (
    <div className="create-acct">
      <img src={vector} alt="vector" className="imgv" />
      <form className="signup-form d-flex jcc-aic">
        <div className="top">
        <h3>Sign Up</h3>
        <p> Sign up as a Super Admin and create other accounts</p>
        </div>
        
        <div className="d-flex">
          <div className="div-2">
            <label htmlFor="first-name">First Name</label>
            <div className="input-item">
              <input
                type="text"
                placeholder="Enter your chosen Name"
                className="inputbox"
                onChange={(e) => {
                  setFormValues({ ...formvalues, firstname: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="div-2">
            <label htmlFor="first-name">Last Name</label>
            <div className="input-item">
              <input
                type="text"
                placeholder="Enter your chosen Name"
                className="inputbox"
                onChange={(e) => {
                  setFormValues({ ...formvalues, lastname: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <div className="input-grp">
          <label htmlFor="email">Email Address</label>
          <div className="input-item">
            <input
              type="text"
              placeholder="Enter your Email Address"
              className="inputbox"
              onChange={(e) => {
                setFormValues({ ...formvalues, email: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="input-grp">
          <label htmlFor="phone no">Phone Number</label>
          <div className="input-item">
            <input
              type="text"
              placeholder="Enter Phone number"
              className="inputbox"
              onChange={(e) => {
                setFormValues({ ...formvalues, phone: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="input-grp">
          <label htmlFor="first-name">Password</label>
          <div className="input-item">
            <input
              type="password"
              placeholder="*****"
              className="inputbox"
              onChange={(e) => {
                setFormValues({ ...formvalues, password: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="checkbox-grp">
          <div className="checkbox">
            <input
              type="checkbox"
              className="checkbox"
              onChange={(e) =>
                setFormValues({ ...formvalues, checkbox: !formvalues.checkbox })
              }
            />
          </div>
          <label htmlFor="first-name">
            Creating an account means you're okay with our Terms of Service,
            Privacy Policy, and default Notification settings
          </label>
        </div>
        <div className="submit-grp">
          <button className="submit-btn" onClick={(e) => handleSubmit(e)}>
            Create Account
          </button>
          <label htmlFor="first-name">
            Have an account?
            <a>Login</a>
          </label>
        </div>
      </form>
    </div>
  );
}

export default SignUp