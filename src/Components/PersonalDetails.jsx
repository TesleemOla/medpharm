import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useAuth } from "./ProtectDashboard/AuthDash";
import { baseurl } from "../Components/utils/baseurl"
import "./styles/OnboardingPage/personaldetails.scss";


const PersonalDetails=({formvalues, setFormvalues})=>{
  const user = useAuth()
  const [roles, setRoles] = useState([])
  useEffect(()=>{
    const config ={
      method: "GET",
      url: `${baseurl}/api/roles`,
      headers:{
        Authorization: `Bearer ${user.token}`
      }
    }
    axios(config)
    .then(res=>{
      setRoles(res.data.data)
    })
  },[user])
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
            <label>Role</label>
              <select onChange={(e) =>
                  setFormvalues({ ...formvalues, roleId: e.target.value })
                }>
                  <option default>Please select a Role</option>
                { roles.map(({id, name})=><option value={id} key={id}>
                  {name}
                </option>)}
              </select>
                
          </div>
          
          <div className="input-grp">
                <label>Upload Profile Image</label>
             
                  <input type="file"
                  accept="image/*"
                  onChange={(e)=>{
                    let reader = new FileReader()
                    reader.readAsDataURL(e.target.files[0])
                    reader.onload=(e)=>{
                  setFormvalues({ ...formvalues, imageUrl: e.target.result})}
                  }
                  }
                  />
               
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