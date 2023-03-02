import React, { useState, useEffect } from 'react'
import axios from "axios"
import hocard from "./hocard"
import Carddets from './Carddets'
import tile1 from "./images/tile-icon1.png"
import tile2 from "./images/tile-icon2.png"
import capsule from "./images/capsule-dark.png"
import { useParams, useNavigate} from "react-router-dom"
import { useAuth } from "./ProtectDashboard/AuthDash"
import {DrugsTable} from "./Tables"
import { baseurl } from './utils/baseurl'
import Tablenav from './Tablenav'

const DrugsDash = () => {
  const navigate = useNavigate()
  const user = useAuth()


  const [drugsData, setDrugsData] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const Card = hocard(Carddets)
  useEffect(()=>{
    


    const config={
      method: "GET",
      url: !user.clientId? `${baseurl}/api/drugs`:
        `${baseurl}/api/drugs/${user.clientId}/clients`,
      headers:{
        Authorization: `Bearer ${user.token}`
      }
    }
    axios(config)
    .then(res=> setDrugsData(res.data.data.sort((a,b)=> a.name < b.name? -1: a.name > b.name? 1: 0)))
  },[user])
  return (
    <div  className="center-dash">
    
      <Tablenav dashfield="Drugs" array={drugsData}
       onClick={()=> navigate("/dashboard/createDrug")}/>
      <DrugsTable array={drugsData} pageNo={pageNo} />
    </div>
  )
}

export default DrugsDash