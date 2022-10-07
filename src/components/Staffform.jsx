import React, {useState} from "react";
import PersonalDetails from "./PersonalDetails"
import EmailSetup from "./EmailSetup"
import Roles from "./Roles"
import Preview from "./Preview"
import { TbArrowNarrowLeft} from "react-icons/tb"
import "./styles/staffform.scss"

const Staffform=()=>{
    const [formvalues, setFormvalues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        Gender: "",
        phone: '',
        designation: "",
        img: "",
        password: ""
    })

    const [page, setPage] = useState(0)
    const pages =["personal details", "Email setup", "Roles & privileges", "preview"]
    return (
      <section className="form-field">
        <h3> {pages[page].toUpperCase()}</h3>
        {
          (page > 0 && page < pages.length-1)?
          <div className="back-div" 
          onClick={()=> setPage(page-1)}>
          <TbArrowNarrowLeft/>
        </div>:
        <></>
        }
        {page ===0?
            <PersonalDetails
            formvalues={formvalues} setFormvalues={setFormvalues}/>: page ===1? 
            <EmailSetup
            formvalues={formvalues} setFormvalues={setFormvalues}/>: page === 2?
            <Roles 
            formvalues={formvalues} setFormvalues={setFormvalues}/> :
            <Preview 
            formvalues={formvalues} />
        }
        {
          page !== pages.length-2?
          <button className="next-btn"
        onClick={()=> page< pages.length-1?setPage(page+1): page }
        >Next
        </button>:
        <button className="Preview-btn"
        onClick={()=> setPage(page+1)}>
          Preview
        </button>
        }
        
      </section>
    );
}

export default Staffform;