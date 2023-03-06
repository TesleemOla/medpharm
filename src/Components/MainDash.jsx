import React, {useEffect, useState} from 'react'
import { useAuth } from "./ProtectDashboard/AuthDash"
import { baseurl } from './utils/baseurl'
import Carddets from './Carddets'
import hocard from './hocard'
import tile1 from "./images/tile-icon1.png"
import tile2 from "./images/tile-icon2.png"
import tile3 from "./images/tile-icon3.png"
import item1 from "./images/item(1).png"
import item2 from "./images/item(2).png"
import item3 from "./images/item(3).png"
import moneybag from "./images/moneybag.png"
import axios from 'axios'


const MainDash = () => {
  const user = useAuth()
  const [drugCategories, setDrugCategories] = useState(0)
  const [inventory, setInventory] = useState(0)
  const [drugs, setDrugs] = useState(0)
  
  useEffect(()=>{
     const config1 = {
      method: "get",
      url: user.clientId? `${baseurl}/api/reports/drugsummary/${user.clientId}/clients`
      :`${baseurl}/api/reports/drugsummary`,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

   
  
    axios(config1)
    .then(res=>{
      setDrugCategories(res.data.data.totalDrugCategory)
      setInventory(res.data.data.totalInventory)
    setDrugs(res.data.data.totalDrugs) })
    // axios(config2)
    // .then(res=> setOrganisations(res.data.data))
    },[drugCategories, inventory,drugs, user])
  const Card= hocard(Carddets)
  return (
    <div className="center-dash">
      <div className="card-flex">
        <Card tile={tile1} item={item2} heading="Number of Drugs" className="card-bg"
        value={drugs} />
        <Card tile={tile2} item={item3} heading="Total Inventory" className="card-bg"
        value={inventory} />
        <Card tile={tile3} item={item1} heading="Drug Category" value={drugCategories} 
        className="card-bg"/>
      </div>
      
      {/* <Table name="Name" id="Pharmacy I.D" mobile="Mobile"
      email="Email" address="Address" status="Status" actions="Action" 
      array={staffdata} /> */}
    </div>
  )
}

export default MainDash