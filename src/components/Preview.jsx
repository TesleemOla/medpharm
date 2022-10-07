import React from "react";
import "./styles/preview.scss"


const Preview=({formvalues})=>{
    return(<div>
        <h1>Preview</h1>
        <p>{formvalues.firstname} {formvalues.lastname}</p>
        <p>{formvalues.email}</p>
        <p>{formvalues.Gender}</p>
        <p>{formvalues.phone}</p>
        <p>{formvalues.designation}</p>
        <p>{formvalues.password}</p>
        <img src={formvalues.img} alt="avatar" className="avatar"/>
    </div>)
}


export default Preview;