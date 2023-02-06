import React, {useState, useEffect} from "react";
import axios from "axios";
import hocard from './hocard'
import { useAuth } from "./ProtectDashboard/AuthDash"
import {DispatchedTable} from './Tables'
import Tablenav from "./Tablenav"
import tile1 from "./images/tile-icon1.png"
import tile2 from "./images/tile-icon2.png"
import item1 from "./images/item(1).png"
import Carddets from './Carddets'
import "./styles/dispatched.scss";
import { baseurl } from "./utils/baseurl";

const DispatchedDash = () => {
  const user = useAuth()
  const [dispatchedData, setDispatchedData] = useState([])
  const [pageNo, setPageNo] = useState(1)
  useEffect(()=>{
    const config={
      method: "GET",
      url: !user.clientId? `${baseurl}/api/dispatcheddrugs?pageNo=${pageNo}&sizePerPage=10`:
        `${baseurl}/api/dispatcheddrugs/${user.clientId}/clients`,
      headers:{
        Authorization: `Bearer ${user.token}`
      },
      
    }
    axios(config)
    .then(res=> { 
      setDispatchedData(res.data.data)
      // console.log(res.data.data)
    })
  },[user])
  const handlePrevious = (e) => {
    e.preventDefault();
    setPageNo(()=>pageNo-1)
  };

  const handleNext = (e) => {
    e.preventDefault();
    setPageNo(()=>pageNo+1)
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
      <Tablenav dashfield="Dispatched" array={dispatchedData} />
      <DispatchedTable array={dispatchedData} pageNo={pageNo} 
      handleNext={handleNext} handlePrev={handlePrevious}/>
    </div>
  )
}


export default DispatchedDash;
