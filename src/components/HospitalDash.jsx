import React from 'react'
import Table from './TableData'
import { AiFillFunnelPlot, AiOutlineSearch } from "react-icons/ai"
import { BiCaretDown } from "react-icons/bi"
import { staffdata } from "../data/data"

const HospitalDash = () => {
  return (
    <div  className="center-dash">
      <nav className="tablenav">
        <p>Hospital</p>
        <div className="tablesearch">
          <input type="search" placeholder="search staff"/>
          <AiOutlineSearch/>
        </div>
        <p><AiFillFunnelPlot/> Filter<BiCaretDown/></p>
        <button>+ Add Hospital</button>
      </nav>
      <Table name="Name" id="Pharmacy I.D" mobile="Mobile"
      email="Email" address="Address" status="Status" actions="Action" 
      array={staffdata}/>
    </div>
  )
}

export default HospitalDash