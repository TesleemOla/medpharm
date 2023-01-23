import React, {useState, useEffect } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { useAuth } from "./ProtectDashboard/AuthDash"
import { RiDashboardFill, RiBuildingLine } from "react-icons/ri";
import { IoPeopleCircle } from "react-icons/io5"
import { BiMessageAltDetail, BiCaretDown, BiCaretUp, BiCaretRight } from "react-icons/bi";
import { FaRegNewspaper, FaBook, FaBuilding } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi"
import { GoSettings } from "react-icons/go"
import { baseurl } from "./utils/baseurl";
import "./styles/Dashboard/sidenav.scss"

const Sidenav=()=>{
  const user = useAuth()

  const navigate = useNavigate()
  const [opendrugs, setOpendrugs]= useState(false)
  const [drugCategories, setDrugCategories] = useState([])

  useEffect ( ()=>{
    const config={
      method: "GET",
      url: `${baseurl}/api/drugscategories`,
      headers:{
        Authorization: `Bearer ${user.token}`
      }
    }

    axios(config)
    .then(res=> setDrugCategories(res.data.data))
  },[user])
    return (
      <aside className="side-aside">
        
        <nav className="sidenav">
          <ul>
            <li className="nav-item" 
            onClick={()=> navigate("/") }>
              <RiDashboardFill />
              Dashboard
            </li>
            { (user.role === "client_admin" || "super_admin") &&
            <li className="nav-item"
            onClick={()=> navigate("/dashboard/manufacturers")}>
              <FaBuilding/>
              Manufacturers
            </li>}
            <li className="nav-item" onClick={()=> navigate("/dashboard/Suppliers")}>
              <IoPeopleCircle />Suppliers</li>
                
              <li className="nav-item"
            onClick={()=> navigate("/dashboard/drugs")}>
              <FaBook />
              Drugs
            </li>
            
           <li className="nav-item d-flex_fd"
            onClick={()=> setOpendrugs(!opendrugs)}>
              <GiMedicines/>Drug Type{opendrugs?<BiCaretUp/>:<BiCaretDown/>}
            </li>
            
                {opendrugs && drugCategories.map(({name, id})=>{
                  return <li key={id} onClick={()=>navigate(`/dashboard/drugcategory/${id}`)}><BiCaretRight/>{name}</li>
                })
                  }
            <li className="nav-item"
            onClick={()=>navigate("/dashboard/Dispatcheddrugs") }>
              <BiMessageAltDetail />
              Dispatched Drugs
            </li>
          {user.role !== "Pharmacist" && <li className="nav-item"
            onClick={()=>navigate("/dashboard/inventory") }>
              <FaRegNewspaper />
              Inventory
            </li>}
            
            
            <li className="nav-item"
            onClick={()=>navigate("/dashboard/settings")}>
              <GoSettings />
              Settings
            </li>
          </ul>
        </nav>
      </aside>
    );
}

export default Sidenav