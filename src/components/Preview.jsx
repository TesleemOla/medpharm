import React from "react";
import "./styles/OnboardingPage/preview.scss"


const Preview=({formvalues, setFormvalues})=>{
    return(<div>
        <h1>Preview</h1>
        <p>{formvalues.firstname} {formvalues.lastname}</p>
        <p>{formvalues.email}</p>
        <p>{formvalues.clientId}</p>
        <p>{formvalues.phoneNumber}</p>
        <p>{formvalues.organisationId}</p>
        <p>{formvalues.password}</p>
        <img src={formvalues.imageUrl} alt="avatar" className="avatar"/>
        <div className="d-flex">
            <input type="checkbox"
            value={formvalues.acceptTermsandConditions}
            onClick={(e)=> setFormvalues({...formvalues, 
            acceptTermsandConditions: !formvalues.acceptTermsandConditions})}
            />
            <label>I accept all the terms and conditions</label>
        </div>
    </div>)
}


export default Preview;