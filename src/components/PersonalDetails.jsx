import React from "react";
import "./styles/OnboardingPage/personaldetails.scss";


const PersonalDetails=({formvalues, setFormvalues})=>{
return (<div className="form">
          <div className="input-grp">
            <label>FirstName</label>
            <div className="input-item">
              <input
                type="text"
                placeholder="Enter your chosen name"
                onChange={(e) =>
                  setFormvalues({ ...formvalues, firstName: e.target.value })
                }
              />
            </div>
          </div>
          <div className="input-grp">
            <label>LastName</label>
            <div className="input-item">
              <input
                type="text"
                placeholder="Enter your last name"
                onChange={(e) =>
                  setFormvalues({
                    ...formvalues,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="input-grp">
            <label>Other Name</label>
            <div className="input-item">
              <input
                type="text"
                placeholder="Enter your last name"
                onChange={(e) =>
                  setFormvalues({
                    ...formvalues,
                    otherName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="input-grp">
            <label>Email Address</label>
            <div className="input-item">
              <input
                type="email"
                placeholder="Enter your email address"
                onChange={(e) =>
                  setFormvalues({ ...formvalues, emailAddress: e.target.value })
                }
              />
            </div>
          </div>
         
          <div className="input-grp">
            <label>Phone number</label>
            <div className="input-item">
              <input
                type="text"
                placeholder="Enter your phone number"
                onChange={(e) =>
                  setFormvalues({ ...formvalues, phoneNumber: e.target.value })
                }
              />
            </div>
          </div>

           <div className="input-id">
            <label>Client ID</label>
              <select onChange={(e) =>
                  setFormvalues({ ...formvalues, clientId: e.target.value })
                }>
                <option/>
              </select>
                
          </div>

          <div className="input-grp">
                <label>Upload Profile Image</label>
                <div className="input-item">
                  <input type="file"
                  accept="image/*"
                  onChange={(e)=>{
                    let reader = new FileReader()
                    reader.readAsDataURL(e.target.files[0])
                    reader.onload=(e)=>{
                  setFormvalues({ ...formvalues,
                  adminUser: {...formvalues.adminUser, imageUrl: e.target.result}})}
                  }
                  }
                  />
                </div>
          </div>
          <div className="input-grp">
                <label>Referral Code</label>
                <div className="input-item">
                  <input type="text"
                  placeholder="referral code"
                  onChange={(e)=>
                  setFormvalues({ ...formvalues,
                  adminUser: {...formvalues.adminUser, refferedReferralCode: e.target.value }})}
                  />
                </div>
          </div>
         
                
        </div>
)
            }

        export default PersonalDetails;