import React from 'react'

const AdminUser = ({formvalues, setFormvalues}) => {
  return (
    <div className="form">
        <div className="input-grp">
            <label>State</label>
            <div className="input-item">
              <input
                type="text"
                placeholder="Enter your last name"
                onChange={(e) =>
                  setFormvalues({
                    ...formvalues,
                    state: e.target.value,
                  })
                }
              />
            </div>
          </div>
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
          
    </div>
  )
}

// adminUser:{
//         imageUrl:"",
//         acceptTermsAndConditions:"",
//         referredReferralCode:""
export default AdminUser