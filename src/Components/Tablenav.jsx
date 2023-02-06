import React, { useState } from 'react'
import { BiFilterAlt} from "react-icons/bi"
import { AiOutlineSearch } from "react-icons/ai"
import "./styles/Dashboard/tablenav.scss"


const Tablenav = ({dashfield, onClick, array}) => {
  const [searchValue, setSearchValue]= useState()
  function handleSearch (e){
    e.preventDefault()
  }
  return (
    <nav className="tablenav">
        <p>{dashfield}</p>
        <div className="tablesearch">
          <input type="search" placeholder={`search ${dashfield}`}
          onChange={(e)=> setSearchValue(e.target.value)}/>
          <AiOutlineSearch onClick={(e)=> console.log(array, searchValue)}/>
        </div>
        <div> 
          <BiFilterAlt/>
          <select>
            
              <option default> Filter</option>
              <option value="name">Name</option>
              <option value="status">Status</option>
          </select>
        </div>
        <button onClick={onClick}>+ Add {dashfield}</button>
      </nav>
  )
}

export default Tablenav