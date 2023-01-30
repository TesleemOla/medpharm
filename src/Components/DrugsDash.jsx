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
  const [drugCategories, setDrugCategories] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const Card = hocard(Carddets)
  useEffect(()=>{
    

    const config2={
      method: "GET",
      url: !user.clientId?
     `${baseurl}/api/drugscategories`:
      `${baseurl}/api/drugscategories/${user.clientId}/clients`,
      headers:{
        Authorization: `Bearer ${user.token}`
      }
    }

    axios(config2)
    .then(res=> setDrugCategories(res.data.data))
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
      <div className="card-flex">
    {drugCategories.map((item)=>{
      return(
        <Card tile={tile2} item={capsule} heading={item.name} className="card-bg" key={item.id}/>
      )
    })}
        
      </div>
      <Tablenav dashfield="Drugs" onClick={()=> navigate("/dashboard/createDrug")}/>
      <DrugsTable array={drugsData} pageNo={pageNo} />
    </div>
  )
}

export default DrugsDash