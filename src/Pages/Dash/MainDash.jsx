import React, {useEffect, useState} from 'react'
import { useAuth } from "../../Components/ProtectDashboard/AuthDash"
import { baseurl } from '../../Components/utils/baseurl'
import Carddets from '../../Components/Carddets'
import hocard from '../../Components/hocard'
import tile1 from "../../Components/images/tile-icon1.png"
import tile2 from "../../Components/images/tile-icon2.png"
import tile3 from "../../Components/images/tile-icon3.png"
import item1 from "../../Components/images/item(1).png"
import item2 from "../../Components/images/item(2).png"
import item3 from "../../Components/images/item(3).png"
import { RecentInventoryTable } from '../../Components/Tables'
import axios from 'axios'
import Tablenav from '../../Components/Tablenav'


const MainDash = () => {
  const user = useAuth()
  const [drugCategories, setDrugCategories] = useState(0)
  const [inventory, setInventory] = useState(0)
  const [recentInventory, setRecentInventory] = useState([])
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

    },[drugCategories, inventory,drugs, user])

    useEffect(()=>{
      const config={
        method: 'GET',
        url: user.clientId? `${baseurl}/api/reports/recentinvent/${user.clientId}/5`:
        `${baseurl}/api/reports/recentinvent/5`,
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      }
      axios(config)
      .then(res=> setRecentInventory(res.data.data))
    },[user])
  const Card= hocard(Carddets)
  return (
    <div className="center-dash">
      <div className="card-flex">
        <Card tile={tile1} item={item2} heading="Number of Drugs" className="card-bg"
        value={drugs} />
        <Card tile={tile2} item={item3} heading="Total Inventory" className="card-bg"
        value={inventory} />
        <Card tile={tile3} item={item1} heading="Drug Categories" value={drugCategories} 
        className="card-bg"/>
      </div>
      <div className="d-flex">
        <div>
          <Tablenav dashfield='Recent Inventory' dis={true} />
          <RecentInventoryTable field1="Name" field2="Batch Number" field3="Package"
          field4="Quantity Left" field5="expired" array={recentInventory} />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default MainDash