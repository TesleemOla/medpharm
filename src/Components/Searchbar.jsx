import React, { useState } from 'react'
import logo from "./images/logo-sm.png"
import { AiOutlineSearch, AiOutlineBell  } from "react-icons/ai"
import { BiMenuAltRight } from "react-icons/bi"
import { BsFillPersonFill } from "react-icons/bs"
import { CgArrowRight } from "react-icons/cg";

import { useNavigate } from 'react-router-dom'
import "./styles/searchbar.scss"


const Searchbar = () => {
    const [searchvalue, setSearchvalue] = useState('')
      const navigate = useNavigate()
    
  return (
    <nav className="searchnav">
      <div className="logo">
          <img src={logo} alt="logo" onClick={()=>navigate('/')}/>
          <BiMenuAltRight className="burger"/>
        </div>
      {/* <div className="box">
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => setSearchvalue(e.target.value)}
        />
        <AiOutlineSearch />
      </div> */}
      <div className="nav-icons">
        
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
          </svg>
          <BsFillPersonFill onClick={()=>navigate("/dashboard/settings")}/>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-power" viewBox="0 0 16 16"
           onClick={()=>{
            sessionStorage.removeItem("user")
            navigate("/", {replace: true})
          }}>
            <path d="M7.5 1v7h1V1h-1z"/>
            <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/>
          </svg>
      </div>
    </nav>
  );
}

export default Searchbar