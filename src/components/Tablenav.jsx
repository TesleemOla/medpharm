import React from 'react'
import { BiFilterAlt} from "react-icons/bi"
import { AiOutlineSearch } from "react-icons/ai"
import "./styles/Dashboard/tablenav.scss"

const Tablenav = ({dashfield}) => {
  return (
    <nav className="tablenav">
        <p>{dashfield}</p>
        <div className="tablesearch">
          <input type="search" placeholder={`search ${dashfield}`}/>
          <AiOutlineSearch/>
        </div>
        <div> 
          <BiFilterAlt/>
          <select>
            
              <option default> Filter</option>
              <option value="name">Name</option>
              <option value="status">Status</option>
          </select>
        </div>
        <button>+ Create {dashfield}</button>
      </nav>
  )
}

export default Tablenav