import React from "react"


const EmailSetup=({formvalues, setFormvalues})=>{
    return (
      <div>
        
        <div className="input-div">
          <label>Email Address</label>
          <div className="input-div">
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) =>
                setFormvalues({ ...formvalues, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className="input-div">
          <label> Set Password</label>
          <div className="input-div">
            <input
              type="password"
              placeholder="*******************"
              onChange={(e) =>
                setFormvalues({ ...formvalues, password: e.target.value })
              }
            />
          </div>
        </div>
      </div>
    );
}

export default EmailSetup;