import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate()
  useEffect(()=>{
    const config={
      method: "GET",
      url: !user.clientId? `${baseurl}/api/dispatcheddrugs?pageNo=${pageNo}&sizePerPage=10&sortBy=drugName`:
        `${baseurl}/api/dispatcheddrugs/${user.clientId}/clients?pageNo=${pageNo}&sizePerPage=10&sortBy=drugName`,
      headers:{
        Authorization: `Bearer ${user.token}`
      },
      
    }
    axios(config)
    .then(res=> { 
      setDispatchedData(res.data.data)
      // console.log(res.data.data)
    })
  },[user, pageNo])
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
        <Card tile={tile2} item={item1} heading="Total Dispatched Drugs" className="card-bg"/>
        <Card tile={tile2} item={item1} heading="Accepted Drugs" className="card-bg"/>
        <Card tile={tile1} item={item1} heading="Rejected Drugs" className="card-bg"/>
        {/* <Card tile={tile1} item={item1} heading="Expired Drugs" className="card-sm"/> */}
      </div>
      <Tablenav dashfield="Dispatched" array={dispatchedData}
      //  dis={!(user.permissions.find((item)=> item === "create:inventory"))}
      onClick={()=> navigate('/dashboard/createDispatchedDrug')}/>
      <DispatchedTable array={dispatchedData} pageNo={pageNo} 
      handleNext={handleNext} handlePrev={handlePrevious}/>
    </div>
  )
}


export default DispatchedDash;
