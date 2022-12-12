import React, {useEffect, useState} from 'react'
import { useAuth } from "./ProtectDashboard/AuthDash"
import Carddets from './Carddets'
import hocard from './hocard'
import tile1 from "./images/tile-icon1.png"
import tile2 from "./images/tile-icon2.png"
import tile3 from "./images/tile-icon3.png"
import reg from "./images/reg.png"
import people from "./images/people.png"
import person from "./images/person.png"
import axios from 'axios'
import Tablenav from './Tablenav'
import { StaffTable } from "./Tables"

const StaffDash = () => {
  const user = useAuth()
  const [staffdata, setStaffdata] = useState()
  useEffect(()=>{
    const config= {
      method: "GET",
      url: `https://medipharm-test.herokuapp.com/api/manufacturers`,
      headers:{
        Authorization: `Bearer ${user.token}`
      }
    }
    axios(config)
    .then(res=> {
      setStaffdata(res.data.data)})
  },[user, staffdata])
  const Card= hocard(Carddets)
  return (
    <div className="center-dash">
      <div className="card-flex">
        <Card tile={tile1} item={people} heading="Total Staff" className="card-bg"/>
        <Card tile={tile2} item={reg} heading="Administrators" className="card-bg"/>
        <Card tile={tile3} item={person} heading="Other role" className="card-bg"/>
      </div>
     <Tablenav dashfield="Staff" />
     <StaffTable array={staffdata} pageNo={1} />
    </div>
  )
}

export default StaffDash