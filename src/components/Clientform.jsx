import React, {useState} from "react";
import PersonalDetails from "./PersonalDetails"
import DetailsSetup from "./DetailsSetup"
import Preview from "./Preview"
import { TbArrowNarrowLeft} from "react-icons/tb"
import "./styles/OnboardingPage/clientform.scss"

const Staffform=({membership, setMembership})=>{
    const [formvalues, setFormvalues] = useState({
        firstName: "",
        lastName: "",
        otherName: "",
        emailAddress: "",
        phoneNumber: '',
        clientId: "",
        roleId:"",
        organisationId: "",
        imageUrl: "",
        referredReferralCode:"",
        acceptTermsandConditions: false
    })
    
    const [page, setPage] = useState(0)
    const pages =["Personal Details", "More Details", "Preview"]
    return (
      <section className="form-field">
        
        
        <form>
          <div className="top">
              { (page > 0 && page < pages.length)?
              <div className="back-div" 
              onClick={()=> setPage(page-1)}>
              <TbArrowNarrowLeft/>
              </div>:
              <></>
              }
            <div className="tx-right">
              <h3> {pages[page]}</h3>
              {
                page < pages.length-1? 
                <p>Create users and assign roles to them</p>:
                <p>Staff Information Preview</p>
              }
            </div>
          </div>
          <div className="side2">
            <div className="headlabel">
              <div>
              <p onClick={()=> setMembership("Client")}>Client</p>
              <p onClick={()=> setMembership("Organisation")}>Organisation</p>
              </div>
              <div className="major-line">
                <div style={{display: membership === "Client"? "block":"none"}}
                className="toleft"></div>
                <div style={{display: membership === "Organisation"? "block":"none"}}
                className="toright"></div>
              </div>
          </div>
          </div>
        {page ===0?
            <PersonalDetails
            formvalues={formvalues} setFormvalues={setFormvalues}/>: page ===1? 
            <DetailsSetup
            formvalues={formvalues} setFormvalues={setFormvalues}/> :
            <Preview 
            formvalues={formvalues} />
        }
        </form>
        {
          page !== pages.length-2?
          <button className="next-btn"
        onClick={()=> page< pages.length-1?setPage(page+1): page }
        >Next
        </button>:
        <button className="preview-btn"
        onClick={()=> setPage(page+1)}>
          Preview
        </button>
        }
        
      </section>
    );
}

export default Staffform;