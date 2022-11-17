import React from 'react'
import hocard from "./hocard"
import Loading from "./Loading"
import Table from "./TableData"
import { staffdata } from "../data/data"
import "./styles/Dashboard/maindash.scss"

const MainDash = () => {
  const ReuseHOC = hocard(Loading)
  return (
    <div className="center-dash">
      <div className="cards">
        <ReuseHOC />
        <ReuseHOC/>
        <ReuseHOC/>
      </div>
      <Table name="Name" id="Pharmacy I.D" mobile="Mobile"
      email="Email" address="Address" status="Status" actions="Action" 
      array={staffdata} />
    </div>
  )
}

export default MainDash