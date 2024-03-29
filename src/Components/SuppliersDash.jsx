import React, { useState, useEffect } from 'react'
import axios from "axios"
import {SupplierTable} from './Tables'
import {useAuth} from "./ProtectDashboard/AuthDash"
import { useNavigate, useParams } from 'react-router-dom'
import { baseurl } from "./utils/baseurl"
import Carddets from './Carddets'
import hocard from './hocard'
import tile1 from "./images/tile-icon1.png"
import tile2 from "./images/tile-icon2.png"
import item2 from "./images/item(2).png"
import Tablenav from './Tablenav'

const SuppliersDash = () => {
  const user = useAuth()
  const {id} = useParams()
  const [pageNo, setPageNo] = useState(1)
  const navigate = useNavigate()
  const [suppliers, setSuppliers] = useState([])
  useEffect(()=>{
    const config={
      method: "GET",
      url: !user.organisationId?`${baseurl}/api/suppliers/`:
      `${baseurl}/api/suppliers/${user.clientId}/clients`,
      headers:{
        Authorization: `Bearer ${user.token}`
      },
      
    }
    axios(config)
    .then(res=> { 
      setSuppliers(res.data.data)
    })
  },[suppliers, user])
  const Card= hocard(Carddets)
  return (
    <div  className="center-dash">
      <div className="card-flex">
        <Card tile={tile1} item={item2} heading="All Organisations" className='card-bg'/>
        <Card tile={tile2} item={item2} heading="Organisation Category" className='card-bg'/>
        <Card tile={tile1} item={item2} heading="Top Organisations" className='card-bg'/>
      </div>
      <Tablenav dashfield="Suppliers" array={suppliers}
      onClick={()=> navigate(`/dashboard/createSupplier`)}/>
      <SupplierTable array={suppliers} pageNo={pageNo} />
    </div>
  )
}

export default SuppliersDash