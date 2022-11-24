import React, {useEffect, useState, useContext} from 'react'
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
import AuthContext from '../Context/AuthContext'


const MainDash = () => {
  const user = useContext(AuthContext)
  const [drugCategories, setDrugCategories] = useState([])
  const [inventory, setInventory] = useState([])
  const [organisations, setOrganisations] = useState([])

  useEffect(()=>{
     const config1 = {
      method: "get",
      url: "https://medipharm-test.herokuapp.com/api/drugscategories",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const config2={
      method: "get",
      url: "https://medipharm-test.herokuapp.com/api/manufacturers",
      headers: {
        Authorization: `Bearer ${user.token}`
      },
    }
    const config3 ={ 
      method: "get",
      url: 'https://medipharm-test.herokuapp.com/api/inventories',
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
    axios(config3)
    .then(res=> setInventory(res.data.data) )
    axios(config2)
    .then(res=> setOrganisations(res.data.data))

    axios(config1)
    .then(res=> setDrugCategories(res.data.data))
    },[drugCategories, inventory, organisations, user])
  const Card= hocard(Carddets)
  return (
    <div className="center-dash">
      <div className="card-flex">
        <Card tile={tile1} item={item2} heading="Number of Organisations" className="card-sm"
        value={organisations.length} />
        <Card tile={tile2} item={item3} heading="Total Inventory" className="card-sm"
        value={inventory.length} />
        <Card tile={tile3} item={item1} heading="Drug Category" value={drugCategories.length} className="card-sm"/>
        <Card tile={tile1} item={moneybag} heading="Total Amount" className="card-sm"/>
      </div>
      {/* <Table name="Name" id="Pharmacy I.D" mobile="Mobile"
      email="Email" address="Address" status="Status" actions="Action" 
      array={staffdata} /> */}
    </div>
  )
}

export default MainDash