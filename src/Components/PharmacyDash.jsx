import React, {useState, useEffect} from "react";
import axios from "axios";
import hocard from './hocard'
import { useAuth } from "./ProtectDashboard/AuthDash"
import {HospitalTable} from './Tables'
import Tablenav from "./Tablenav"
import tile1 from "./images/tile-icon1.png"
import tile2 from "./images/tile-icon2.png"
import item1 from "./images/item(1).png"
import item2 from "./images/item(2).png"
import item3 from "./images/item(3).png"
import Carddets from './Carddets'
import "./styles/Pharmacy.scss";

const PharmacyDash = () => {
  const user = useAuth()
  const [pharmacyData, setPharmacyData] = useState([])
  useEffect(()=>{
    const config={
      method: "GET",
      url: 'https://medipharm-test.herokuapp.com/api/suppliers',
      headers:{
        Authorization: `Bearer ${user.token}`
      },
      
    }
    axios(config)
    .then(res=> { 
      setPharmacyData(res.data.data)
    })
  },[user])
  const handlePrevious = (e) => {
    e.preventDefault();
  };

  const handleNext = (e) => {
    e.preventDefault();
  };
  const Card= hocard(Carddets)
  
  return (
    <div className="center-dash">

      <div className="card-flex">
        <Card tile={tile2} item={item1} heading="Total Drugs" className="card-sm"/>
        <Card tile={tile2} item={item1} heading="Available Drugs" className="card-sm"/>
        <Card tile={tile1} item={item1} heading="Not available" className="card-sm"/>
        <Card tile={tile1} item={item1} heading="Expiry Date" className="card-sm"/>
      </div>
      <Tablenav dashfield="Hospital" />
      <HospitalTable field1="Name" field2="Pharmacy I.D" field3="Mobile"
      field4="Email" field5="Address" field6="Status" field7="Action" 
      array={pharmacyData} />
    </div>
  )
}


export default PharmacyDash;
