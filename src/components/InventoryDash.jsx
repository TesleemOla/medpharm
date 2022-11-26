import React, { useState, useEffect, useContext} from 'react'
import axios from 'axios'
import Carddets from './Carddets'
import hocard from './hocard'
import AuthContext from '../Context/AuthContext'
import Tablenav from "./Tablenav"
import tile1 from "./images/tile-icon1.png"
import tile2 from "./images/tile-icon2.png"
import deposit from "./images/depositphotos.png"
import item1 from "./images/item(1).png"
import capsule from "./images/capsule-dark.png"
import calendar from "./images/calendar.png"
import {InventoryTable} from './Tables'



const InventoryDash = () => {
  const {userAuth} = useContext(AuthContext)
  const [allInventory, setAllInventory] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [openEdit, setOpenEdit] = useState(false)
  useEffect(()=>{
    const config={
      method: "get",
      url: "https://medipharm-test.herokuapp.com/api/inventories",
      pageNo,
      sizePerPage: 10,
      headers:{
        Authorization: `Bearer ${userAuth.token}`
      }
    }
    axios(config)
    .then(res=>{
      setAllInventory(res.data.data)
    })
  },[allInventory, pageNo, userAuth])
  const Card= hocard(Carddets)
  return (
    <div className="center-dash">
      <div className="card-flex">
        <Card tile={tile2} item={deposit} heading="Total Drugs" className="card-sm" 
        value={allInventory.length}/>
        <Card tile={tile2} item={capsule} heading="Available Drugs" className="card-sm" 
        value={(allInventory.filter(i=> i.status === "ACTIVE")).length} />
        <Card tile={tile1} item={item1} heading="Not available" className="card-sm" 
        value={(allInventory.filter(i=> i.status !== "ACTIVE")).length}/>
        <Card tile={tile1} item={calendar} heading="Expired" className="card-sm" 
        value={(allInventory.filter(i=> i.expired)).length}/>
      </div>
      <Tablenav dashfield="Inventory"/>
      <InventoryTable field1="Name" field2="Product I.D" field3="Category"
      field4="Total Quantity" field5="Amount" field6="Expiry Date" 
      field7="Status" field8="Actions" array={allInventory}
      data1={"drugName"} data2="drugId" data3="packageType" data4="quantityLeft"
      data5="amount" data6="expiryDate" data7="status"/>
    </div>
  )
}

export default InventoryDash