import React from 'react'
import { AiFillFunnelPlot, AiOutlineSearch } from "react-icons/ai"
import { BiCaretDown } from "react-icons/bi"
import Table from './TableData'
import { staffdata } from "../data/data"

const StaffDash = () => {
  return (
    <div className="center-dash">
      <nav className="tablenav">
        <p>Staff</p>
        <div className="tablesearch">
          <input type="search" placeholder="search staff"/>
          <AiOutlineSearch/>
        </div>
        <p><AiFillFunnelPlot/> Filter<BiCaretDown/></p>
        <button>+ Add Staff</button>
      </nav>
        <Table name="Name" id="Staff I.D" email="email" address="Address" status="Status" 
        actions="Actions" array={staffdata} />
    </div>
  )
}

export default StaffDash