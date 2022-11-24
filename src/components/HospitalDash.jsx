import React from 'react'
import {InventoryTable} from './Tables'
import Carddets from './Carddets'
import hocard from './hocard'
import tile1 from "./images/tile-icon1.png"
import tile2 from "./images/tile-icon2.png"
import item2 from "./images/item(2).png"
import { staffdata } from "../data/data"
import Tablenav from './Tablenav'

const HospitalDash = () => {
  const Card= hocard(Carddets)
  return (
    <div  className="center-dash">
      <div className="d-flex">
        <Card tile={tile1} item={item2} heading="All Organisations"/>
        <Card tile={tile2} item={item2} heading="Organisation Category"/>
        <Card tile={tile1} item={item2} heading="Top Organisations"/>
      </div>
      <Tablenav dashfield="Hospital" />
      <InventoryTable name="Name" id="Pharmacy I.D" mobile="Mobile"
      email="Email" address="Address" status="Status" actions="Action" 
      array={staffdata}/>
    </div>
  )
}

export default HospitalDash