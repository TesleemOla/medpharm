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
import { baseurl } from './utils/baseurl'
import { ManufacturerTable } from "./Tables"
import { useNavigate } from 'react-router-dom'

const Manufacturers = () => {
  const user = useAuth()

  const [manufacturers, setManufacturers] = useState([])
  useEffect(()=>{
    const config= {
      method: "GET",
      url: !user.clientId? `${baseurl}/api/manufacturers`:
      `${baseurl}/api/manufacturers/${user.clientId}/clients`,
      headers:{
        Authorization: `Bearer ${user.token}`
      }
    }
    axios(config)
    .then(res=> {
      setManufacturers(res.data.data)})
  },[user, manufacturers])
  const navigate = useNavigate()
  // function handleCreate(){
  //   if(user)
  // }
  const Card= hocard(Carddets)
  return (
    <div className="center-dash">
      <div className="card-flex">
        <Card tile={tile1} item={people} heading="Total Manufacturers" className="card-bg"/>
        <Card tile={tile2} item={reg} heading="Administrators" className="card-bg"/>
        <Card tile={tile3} item={person} heading="Other role" className="card-bg"/>
      </div>
     <Tablenav dashfield="Manufacturers" array={manufacturers} onClick={()=>navigate("/dashboard/createManufacturer")}/>
     <ManufacturerTable array={manufacturers} pageNo={1} />
    </div>
  )
}

export default Manufacturers