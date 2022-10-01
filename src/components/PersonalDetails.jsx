const PersonalDetails=({formvalues, setFormvalues})=>{
return (<form>
          <div className="input-div">
            <label>FirstName</label>
            <div className="input-div">
              <input
                type="text"
                placeholder="Enter your chosen name"
                onChange={(e) =>
                  setFormvalues({ ...formvalues, firstname: e.target.value })
                }
              />
            </div>
          </div>
          <div className="input-div">
            <label>LastName</label>
            <div className="input-div">
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
          <div className="input-div">
            <label>Email Address</label>
            <div className="input-div">
              <input
                type="email"
                placeholder="Enter your email address"
                onChange={(e) =>
                  setFormvalues({ ...formvalues, email: e.target.value })
                }
              />
            </div>
          </div>
          <div className="input-div">
            <label>Gender</label>
            <div className="input-div">
              <input
                type="text"
                placeholder="Gender"
                onChange={(e) =>
                  setFormvalues({ ...formvalues, gender: e.target.value })
                }
              />
            </div>
          </div>
          <div className="input-div">
            <label>Phone number</label>
            <div className="input-div">
              <input
                type="text"
                placeholder="Enter your phone number"
                onChange={(e) =>
                  setFormvalues({ ...formvalues, phone: e.target.value })
                }
              />
            </div>
          </div>
          <div className="input-div">
            <label>Designation</label>
            <div className="input-div">
              <input
                type="text"
                placeholder="Enter your Designation"
                onChange={(e) =>
                  setFormvalues({ ...formvalues, designation: e.target.value })
                }
              />
            </div>
          </div>
          <div className="input-div">
                    {/* <label>Email Address</label> */}
                    <div className="input-div">
                        <input type="file" 
                        placeholder="Enter your chosen name"
                        onChange={(e)=> setFormvalues({...formvalues, email: e.target.value})}
                        />
                    </div>
                </div>
        </form>
)
            }

        export default PersonalDetails;