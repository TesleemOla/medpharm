import React from "react";
import Staffform from "./Staffform";
import "./styles/onboarding.scss"

const Onboarding=({membership})=>{
    if(membership === "Staff"){
    return (
      <div className="onboard">
        <nav className="reg-nav">
          <ul>
            <li>
              <span className="number">1.</span>
              Personal Details
            </li>
            <li>
              <span className="number">2.</span>
              Email Setup
            </li>
            <li>
              <span className="number">3.</span>
              Roles and Privileges
            </li>
          </ul>
        </nav>
       <Staffform />
      </div>
    );
    }else if( membership==="Client"){
        return (
          <section className="onboard">
            
          </section>
        );
    }
}

export default Onboarding;