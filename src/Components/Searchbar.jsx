import React, { useState } from 'react'
import logo from "./images/logo-sm.png"
import { AiOutlineSearch, AiOutlineBell  } from "react-icons/ai"
import { BiMenuAltRight } from "react-icons/bi"
import { BsFillPersonFill } from "react-icons/bs"
import { CgArrowRight } from "react-icons/cg";
import "./styles/searchbar.scss"
import { useNavigate } from 'react-router-dom'


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
        
          <AiOutlineBell />
          <BsFillPersonFill onClick={()=>navigate("/dashboard/settings")}/>
          <CgArrowRight onClick={()=>{
            sessionStorage.removeItem("user")
            navigate("/", {replace: true})
          }}/>
      </div>
    </nav>
  );
}

export default Searchbar