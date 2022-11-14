import React from "react";
import Clientform from "./Clientform";
import Orgform from "./Orgform"
import "./styles/OnboardingPage/onboarding.scss"
import logo from "./images/logo-blue.svg";
// import Diag from "./images/Group 11504.svg";
import Regnav from "./Regnav";

const Onboarding=({membership, setMembership})=>{
  const clientnav = [{name:"PersonalDetails",id:1},
  {name:"More details", id: 2},{name: "Preview", id: 3}]
  const orgnav=[{name: "Company details", id:1},
{name:"Subscription", id: 2}, {name:"More details", id:3},
{name:"Preview", id:4}]
    if(membership === "Client"){
    return (
      <div className="onboard">
        <Regnav
        navlist={clientnav}
        navclass="reg-nav"
        logo={logo}
        logo-class="logo"
        />
        
          <Clientform membership={membership} setMembership={setMembership}/>
       
      </div>
    );
    }else if( membership==="Organisation"){
        return (
          <section className="onboard">
            <Regnav
            navlist={orgnav}
            navclass="reg-nav"
            logo={logo}
            logo-class="logo"
            // Diag={Diag}
            // DiagClass="logo-bg"
            />
            <Orgform membership={membership} setMembership={setMembership}/>
          </section>
        );
    }
}

export default Onboarding;