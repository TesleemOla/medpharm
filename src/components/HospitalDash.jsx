import React, { useState, useEffect } from 'react'
import axios from "axios"
import {HospitalTable} from './Tables'
import {useAuth} from "./ProtectDashboard/AuthDash"
import Carddets from './Carddets'
import hocard from './hocard'
import tile1 from "./images/tile-icon1.png"
import tile2 from "./images/tile-icon2.png"
import item2 from "./images/item(2).png"
import Tablenav from './Tablenav'

const HospitalDash = () => {
  const user = useAuth()
  const [staffData, setStaffData] = useState([])
  useEffect(()=>{
    const config={
      method: "GET",
      url: `https://medipharm-test.herokuapp.com/api/manufacturers`,
      // url: 'https://medipharm-test.herokuapp.com/api/reports/drugsummary',
      headers:{
        Authorization: `Bearer ${user.token}`
      },
      
    }
    axios(config)
    .then(res=> { 
      setStaffData(res.data.data)
      // console.log(res.data.data)
    })
  },[staffData, user])
  const Card= hocard(Carddets)
  return (
    <div  className="center-dash">
      <div className="d-flex">
        <Card tile={tile1} item={item2} heading="All Organisations"/>
        <Card tile={tile2} item={item2} heading="Organisation Category"/>
        <Card tile={tile1} item={item2} heading="Top Organisations"/>
      </div>
      <Tablenav dashfield="Hospital" />
      <HospitalTable array={staffData} />
    </div>
  )
}

export default HospitalDash