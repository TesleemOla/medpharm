import React, { useState } from 'react'
import { BiFilterAlt} from "react-icons/bi"
import { AiOutlineSearch } from "react-icons/ai"
import "./styles/Dashboard/tablenav.scss"


const Tablenav = ({dashfield, onClick, dis }) => {
 

  return (
    <nav className="tablenav">
        <p>{dashfield}</p>
        
      
        <button onClick={onClick} disabled={dis}>+ Add {dashfield}</button>
      </nav>
  )
}

export default Tablenav