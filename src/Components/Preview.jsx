import React from "react";
import "./styles/OnboardingPage/preview.scss"


const Preview=({formvalues, setFormvalues})=>{
    
    return(<div>
        <h1>Preview</h1>
        <p>Name: </p>
        <p>{formvalues.firstName} {formvalues.lastName}</p>
        <p>Email: </p>
        <p>{formvalues.emailAddress}</p>
        <p>Phone Number: </p>
        <p>{formvalues.phoneNumber}</p>
        
        <img src={formvalues.imageUrl} alt="avatar" className="avatar-img"/>
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