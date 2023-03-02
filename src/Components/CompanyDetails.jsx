import React from 'react'

const CompanyDetails = ({formvalues, setFormvalues}) => {
  
  return (
    <div className="form">
          <div className="input-grp">
            <label>Company name</label>
            <div className="input-item">
              <input
                type="text"
                placeholder="Enter your company name"
                onChange={(e) =>
                  setFormvalues({ ...formvalues, companyName: e.target.value })
                }
              />
            </div>
          </div>
          
            
            {/* <div className="input-id">
            <label>Parent Organisation ID</label>
              <select onChange={(e) =>
                  setFormvalues({ ...formvalues, parentOrganisationId: e.target.value })
                }>
                <option/>
              </select>
                
          </div> */}
          
          
          <div className="input-grp">
            <label>Email Address</label>
            <div className="input-item">
              <input
                type="email"
                placeholder="Enter your email address"
                onChange={(e) =>
                  setFormvalues({ ...formvalues,
                  contactEmailAddress: e.target.value })
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
                  setFormvalues({ ...formvalues, 
                    contactPhoneNumber: e.target.value })
                }
              />
            </div>
          </div>
          
          <div className="input-grp">
            <label>Office Address</label>
            <div className="input-item">
              <input
                type="text"
                placeholder="Enter your office Address"
                onChange={(e) =>
                  setFormvalues({
                    ...formvalues,
                   officeAddress: e.target.value,
                  })
                }
              />
            </div>
          </div>
           <div className="input-grp">
            <label>City</label>
            <div className="input-item">
              <input
                type="text"
                placeholder="City"
                onChange={(e) =>
                  setFormvalues({ ...formvalues, city: e.target.value })
                }
              />
            </div>
          </div>
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
                     
        </div>
  )
}

export default CompanyDetails