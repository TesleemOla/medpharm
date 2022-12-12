import React, { useState, useEffect } from 'react'
import axios from "axios"
import hocard from "./hocard"
import Carddets from './Carddets'
import tile1 from "./images/tile-icon1.png"
import tile2 from "./images/tile-icon2.png"
import capsule from "./images/capsule-dark.png"
import { useParams} from "react-router-dom"
import { useAuth } from "./ProtectDashboard/AuthDash"
import {DrugsTable} from "./Tables"
import Tablenav from './Tablenav'

const DrugsDash = () => {
  const user = useAuth()
  const {name} = useParams()
  const [drugsData, setDrugsData] = useState([])
  const [drugCategories, setDrugCategories] = useState([])
  const Card = hocard(Carddets)
  useEffect(()=>{
    const config2={
      method: "GET",
      url: 'https://medipharm-test.herokuapp.com/api/drugscategories',
      headers:{
        Authorization: `Bearer ${user.token}`
      }
    }

    axios(config2)
    .then(res=> setDrugCategories(res.data.data))
    const config={
      method: "GET",
      url: "https://medipharm-test.herokuapp.com/api/drugs",
      headers:{
        Authorization: `Bearer ${user.token}`
      }
    }
    axios(config)
    .then(res=> setDrugsData(res.data.data))
  },[user])
  return (
    <div  className="center-dash">
      <div className="card-flex">
         <Card tile={tile1} item={capsule} heading="TotalDrugs" className="card-sm"/>
    {drugCategories.map((item)=>{
      return(
        <Card tile={tile2} item={capsule} heading={item.name} className="card-sm"/>
      )
    })}
        
      </div>
      <Tablenav dashfield="Drugs" />
      <DrugsTable array={drugsData} pageNo={1} />
    </div>
  )
}

export default DrugsDash