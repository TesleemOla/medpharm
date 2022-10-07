import React from "react";
import "./styles/personaldetails.scss";

const PersonalDetails=({formvalues, setFormvalues})=>{
return (<form>
          <div className="input-grp">
            <label>FirstName</label>
            <div className="input-item">
              <input
                type="text"
                placeholder="Enter your chosen name"
                onChange={(e) =>
                  setFormvalues({ ...formvalues, firstname: e.target.value })
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
                    lastfirstname: e.target.value,
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
                  setFormvalues({ ...formvalues, email: e.target.value })
                }
              />
            </div>
          </div>
          <div className="input-grp">
            <label>Gender</label>
            <div className="input-item">
              <input
                type="text"
                placeholder="Gender"
                onChange={(e) =>
                  setFormvalues({ ...formvalues, gender: e.target.value })
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
                  setFormvalues({ ...formvalues, phone: e.target.value })
                }
              />
            </div>
          </div>
          <div className="input-grp">
            <label>Designation</label>
            <div className="input-item">
              <input
                type="text"
                placeholder="Enter your Designation"
                onChange={(e) =>
                  setFormvalues({ ...formvalues, designation: e.target.value })
                }
              />
            </div>
          </div>
          <div className="input-grp">
                    {/* <label>Email Address</label> */}
                
                        <input type="file"
                        accept="image/*"
                        onChange={(e)=> {
                          
                          let reader = new FileReader()
                          reader.readAsDataURL(e.target.files[0])

                          reader.onload=(e)=>{
                            console.log("imgfile",e.target.result)
                            setFormvalues({...formvalues, img: e.target.result})
                          }
                        }}
                        />
                    </div>
                
        </form>
)
            }

        export default PersonalDetails;