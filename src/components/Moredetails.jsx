import React from "react";

const Moredetails=({formvalues, setFormvalues})=>{
    return(
        <div className="form">
          <div className="input-grp">
            <label>Admin Email</label>
            <div className="input-item">
              <input
                type="text"
                placeholder="Enter your Admin email"
                onChange={(e) =>
                  setFormvalues({ ...formvalues, 
                    adminUser: {...formvalues.adminUser, emailAddress:e.target.value} })
                }
              />
            </div>
          </div>
              
          <div className="input-grp">
            <label>First Name</label>
            <div className="input-item">
              <input
                type="text"
                placeholder="Enter your chosen name"
                onChange={(e) =>
                  setFormvalues({ ...formvalues,
                     adminUser:{ ...formvalues.adminUser, firstName: e.target.value }})
                }
              />
            </div>
          </div>
          <div className="input-grp">
            <label>Last Name</label>
            <div className="input-item">
              <input
                type="text"
                placeholder="Enter your last name"
                onChange={(e) =>
                  setFormvalues({ ...formvalues,
                     adminUser:{...formvalues.adminUser, lastName: e.target.value} })
                }
              />
            </div>
          </div>
          <div className="input-grp">
            <label>Phone Number</label>
            <div className="input-item">
              <input
                type="text"
                placeholder="Phone number"
                onChange={(e) =>
                  setFormvalues({ ...formvalues, 
                  adminUser:{...formvalues.adminUser, phoneNumber: e.target.value}})
                }
              />
            </div>
          </div>
            <div className="input-grp">
                <label>Other Name</label>
                <div className="input-item">
                  <input type="text"
                  placeholder="Enter your Other name"
                  onChange={(e)=>
                  setFormvalues({ ...formvalues,
                  adminUser: {...formvalues.adminUser, otherName: e.target.value }})}
                  />
                </div>
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


export default Moredetails;