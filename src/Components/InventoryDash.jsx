import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Carddets from './Carddets'
import hocard from './hocard'
import {useAuth} from "./ProtectDashboard/AuthDash"
import Tablenav from "./Tablenav"
import tile1 from "./images/tile-icon1.png"
import tile2 from "./images/tile-icon2.png"
import item1 from "./images/item(1).png"
import capsule from "./images/capsule-dark.png"
import calendar from "./images/calendar.png"
import {InventoryTable} from './Tables'
import { baseurl } from './utils/baseurl'



const InventoryDash = () => {
  const user = useAuth()
  const Navigate = useNavigate()
  const [allInventory, setAllInventory] = useState([])
  const [totalDrugs, setTotalDrugs] = useState(0)
  const [pageNo, setPageNo] = useState(1)
  const [dataSize, setDataSize] = useState()
  // const [openEdit, setOpenEdit] = useState(false)
  useEffect(()=>{
    const config={
      method: "get",
      url: !user.clientId?`${baseurl}/api/inventories/paged?pageNo=${pageNo}&sizePerPage=10&sortBy=drugName`:
      `${baseurl}/api/inventories/${user.clientId}/paged?pageNo=${pageNo}&sizePerPage=10&sortBy=drugName`,
      pageNo,
      sizePerPage: dataSize,
      headers:{
        Authorization: `Bearer ${user.token}`
      }
    }
    const config2={
      method: "GET",
      url: 'https://medipharm-test.herokuapp.com/api/reports/drugsummary',
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
    axios(config2)
    .then(res=> setTotalDrugs(res.data.data.totalDrugs))
    axios(config)
    .then(res=>{
      
      // console.log(up)
      setAllInventory(res.data.data)
    })
  },[allInventory, pageNo, dataSize, user])
      const date = new Date()
      let up = `${date.getFullYear()}-${(Number(date.getMonth())+1)}-${date.getDate()}}`
  const Card= hocard(Carddets)
  return (
    <div className="center-dash">
      <div className="card-flex">
        <Card tile={tile2} item={item1} heading="Total Drugs" className="card-bg" 
        value={totalDrugs}/>
        <Card tile={tile2} item={capsule} heading="Available Drugs" className="card-bg" 
        value={(allInventory.filter(i=> i.status === "ACTIVE")).length} />
        <Card tile={tile1} item={calendar} heading="Expired" className="card-bg" 
        value={(allInventory.filter(i=> toString(i.expiryDate.substring(0,10)) === toString(up))).length}/>
      </div>
      <Tablenav dashfield="Inventory" array={allInventory} dis={!(user.permissions.find((item)=> item === "create:inventory"))}
      onClick={()=> Navigate("/dashboard/createInventory")}/>
      <InventoryTable field1="Name" field2="Product I.D" field3="Category"
      field4="Total Quantity" field5="Expired" field6="Expiry Date" 
      field7="Status" field8="Actions" array={allInventory} pageNo={pageNo} setDataSize={setDataSize} />
    </div>
  )
}

export default InventoryDash