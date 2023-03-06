import React, { useState } from 'react'
import { BiFilterAlt} from "react-icons/bi"
import { AiOutlineSearch } from "react-icons/ai"
import "./styles/Dashboard/tablenav.scss"


const Tablenav = ({dashfield, onClick, handleSearch, dis }) => {
  const [searchValue, setSearchValue]= useState()

  return (
    <nav className="tablenav">
        <p>{dashfield}</p>
        <form className="tablesearch"  onSubmit={()=>handleSearch(searchValue)}>
          <input type="search" placeholder={`search ${dashfield}`}
          onChange={(e)=> setSearchValue(e.target.value)}/>
        </form>
      
        <button onClick={onClick} disabled={dis}>+ Add {dashfield}</button>
      </nav>
  )
}

export default Tablenav