import React, {useState} from "react";
import Clientform from "./Clientform";
import Orgform from "./Orgform"
import "./styles/OnboardingPage/onboarding.scss"
import logo from "./images/logo-sm.png";
import Diag from "./images/Group 11504.svg";
import Regnav from "./Regnav";

const Onboarding=({membership, setMembership})=>{
  const clientnav = [{name:"PersonalDetails",id:1},{name: "Preview", id: 2}]
  const orgnav=[{name: "Company details", id:1},
{name:"More details", id:2},
{name:"Preview", id:3}]
 const [page, setPage] = useState(0)
 const [orgPage, setOrgPage] = useState(0)
    if(membership === "Client"){
    return (
      <div className="onboard">
        <Regnav
        navlist={clientnav}
        navclass="reg-nav"
        logo={logo}
        logo-class="logo"
        Diag={Diag}
        DiagClass="logo-bg"
        pgitem={page}
        />
        
          <Clientform membership={membership} setMembership={setMembership}
          page={page} setPage={setPage}/>
       
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
            Diag={Diag}
            DiagClass="logo-bg"
            pgitem={orgPage}
            />
            <Orgform membership={membership} setMembership={setMembership}
            orgPage={orgPage} setOrgPage={setOrgPage}/>
          </section>
        );
    }
}

export default Onboarding;