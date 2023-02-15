import React, { useState, useEffect } from 'react'
import axios from "axios"
import Carddets from '../../Components/Carddets'
import hocard from '../../Components/hocard'
import { useAuth } from '../../Components/ProtectDashboard/AuthDash'
import { baseurl } from '../../Components/utils/baseurl'
import tile1 from "../../Components/images/tile-icon1.png"
import tile2 from "../../Components/images/tile-icon2.png"
import item2 from "../../Components/images/item(2).png"


const SubscriptionDash = () => {
  const user = useAuth()
  const [staffData, setStaffData] = useState([])

  useEffect(()=>{
    const config ={
      method: "GET",
      url: `${baseurl}`,
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
    axios.get()
  },[user])
   const Card= hocard(Carddets)
  return (
    <div  className="center-dash">
      <div className="card-flex">
        <Card tile={tile1} item={item2} heading="All Staff" className='card-sm'/>
        <Card tile={tile2} item={item2} heading="Administrators" className='card-sm'/>
        <Card tile={tile1} item={item2} heading="Other roles" className='card-sm'/>
      </div>
    </div>
  )
}

export default SubscriptionDash