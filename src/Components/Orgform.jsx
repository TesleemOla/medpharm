import React, {useState} from 'react';
import axios from 'axios'
import { ToastContainer, toast} from "react-toastify"
import CompanyDetails from "./CompanyDetails";
import Moredetails from "./Moredetails"
import Preview from "./Preview"
import {baseurl} from "./utils/baseurl"
import {useAuth} from "./ProtectDashboard/AuthDash"
import { TbArrowNarrowLeft} from "react-icons/tb"

const Orgform = ({membership, setMembership, orgPage, setOrgPage}) => {
  const user = useAuth()
 const [formvalues, setFormvalues] = useState({
    companyName:'',
    clientType:'',
    parentOrganisationId: "",
    contactEmailAddress:"",
    contactPhoneNumber:"",
    officeAddress:'',
    city:"",
    state: "",
    adminUser:{
        emailAddress:"",
        firstName:'',
        lastName: "",
        phoneNumber:"",
        otherName:"",
        imageUrl:"",
        acceptTermsAndConditions:"",
        referredReferralCode:""
    }
    })
    
    
    const pages =["Company Details", "Admin User Details", "Preview"]
    return (
      <section className="form-field">
        <ToastContainer/>
        
        <form>
          <div className="top">
              { (orgPage > 0 && orgPage < pages.length)?
              <div className="back-div" 
              onClick={()=> setOrgPage(orgPage-1)}>
              <TbArrowNarrowLeft/>
              </div>:
              <></>
              }
            <div className="tx-right">
              <h3> {pages[orgPage]}</h3>
              {
                orgPage < pages.length-1? 
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
        {orgPage ===0?
            <CompanyDetails
            formvalues={formvalues} setFormvalues={setFormvalues}/>: orgPage ===1? 
            <Moredetails 
            formvalues={formvalues} setFormvalues={setFormvalues} />:
            <Preview 
            formvalues={formvalues} />
        }
        </form>
        {
          orgPage !== pages.length-2?
          <button className="next-btn"
        onClick={()=> orgPage< pages.length-1?setOrgPage(orgPage+1): orgPage }
        >Next
        </button>:
        orgPage === pages.length?
        <button className="next-btn"
        onClick={(e)=> {
          e.preventDefault()
          const config={
            method: 'POST',
            url: `${baseurl}/api/organisations/register`,
            data: formvalues,
            headers: {
              Authorization: `Bearer ${user.token}`
            }
          }
          axios(config)
          .then(res=> toast(res.data.data.message))
          .catch(err=> toast(err.message))
        }}>
          Submit
        </button>:
        <button className="preview-btn"
        onClick={()=> setOrgPage(orgPage+1)}>
          Preview
        </button>
        }
        
      </section>
    );
}

export default Orgform