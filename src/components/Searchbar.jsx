import React, {useState} from 'react'
import logo from "./images/logo.svg"
import { AiOutlineSearch, AiOutlineBell  } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { CgArrowRight } from "react-icons/cg";
import "./styles/searchbar.scss"

const Searchbar = () => {
    const [searchvalue, setSearchvalue] = useState('')
  return (
    <nav className="searchnav">
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>
          Medipharm
          <br />
          Assistant
        </span>
      </div>
      <div className="box">
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => setSearchvalue(e.target.value)}
        />
        <AiOutlineSearch />
      </div>
      <div className="nav-icons">
        
          <AiOutlineBell />
          <BsFillPersonFill />
          <CgArrowRight />
      </div>
    </nav>
  );
}

export default Searchbar