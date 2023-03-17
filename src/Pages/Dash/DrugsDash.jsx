import React, { useState, useEffect } from 'react'
import axios from "axios"
import hocard from "../../Components/hocard"
import Carddets from '../../Components/Carddets'
import tile1 from "../../Components/images/tile-icon1.png"
import tile2 from "../../Components/images/tile-icon2.png"
import capsule from "../../Components/images/capsule-dark.png"
import { useParams, useNavigate} from "react-router-dom"
import { useAuth } from "../../Components/ProtectDashboard/AuthDash"
import {DrugsTable} from "../../Components/Tables"
import { baseurl } from '../../Components/utils/baseurl'
import Tablenav from '../../Components/Tablenav'

const DrugsDash = () => {
  const navigate = useNavigate()
  const user = useAuth()
 

  const [drugsData, setDrugsData] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [sizePerPage, setSizePerPage] = useState()
  const Card = hocard(Carddets)
  const handleSearch=(e,val )=>{
    e.preventDefault()
    console.log(val)
    
    // setDrugsData(drugsData.filter(item=> item.toLowerCase() === val.toLowerCase()))
  }
  useEffect(()=>{
    


    const config={
      method: "GET",
      url: !user.clientId? `${baseurl}/api/drugs/paged?pageNo=${pageNo}&sizePerPage=10&sortBy=drugName`:
        `${baseurl}/api/drugs/${user.clientId}/clients/paged?pageNo=${pageNo}&sizePerPage=10&sortBy=drugName`,
      headers:{
        Authorization: `Bearer ${user.token}`
      }
    }
    axios(config)
    .then(res=> setDrugsData(res.data.data.sort((a,b)=> a.name < b.name? -1: a.name > b.name? 1: 0)))
  },[user, pageNo])
  return (
    <div  className="center-dash">
    
      <Tablenav dashfield="Drugs" handleSearch={(e)=>handleSearch(e)} dis={!(user.permissions.find((item)=> item === "create:drug"))}
       onClick={()=> navigate("/dashboard/createDrug")} />
      <DrugsTable array={drugsData} pageNo={pageNo} setDataSize={setSizePerPage}/>
    </div>
  )
}

export default DrugsDash