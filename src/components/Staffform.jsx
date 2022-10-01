import React, {useState} from "react";
import PersonalDetails from "./PersonalDetails"
import EmailSetup from "./EmailSetup"
import Roles from "./Roles"

const Staffform=()=>{
    const [formvalues, setFormvalues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        Gender: "",
        phone: '',
        designation: "",
        img: ""
    })

    const [page, setPage] = useState(0)
    const pages =["personal details", "Email setup", "Roles & privileges"]
    return (
      <section className="form-field">
        <h2> {pages[page]}</h2>
        <p>Create Users and assign roles to them</p>
        {page ===0?
            <PersonalDetails/>: page ===1? 
            <EmailSetup/>: <Roles />
        }

        <button
        onClick={()=>setPage(page+1) }
        >
            {page === pages.length -1? "Preview": "Next"}
        </button>
      </section>
    );
}

export default Staffform;