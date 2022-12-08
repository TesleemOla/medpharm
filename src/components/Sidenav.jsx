import React, {useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./ProtectDashboard/AuthDash"
import { RiDashboardFill, RiBuildingLine } from "react-icons/ri";
import { IoPeopleCircle } from "react-icons/io5"
import { BiCapsule, BiMessageAltDetail, BiCaretDown, BiCaretUp, BiCaretRight } from "react-icons/bi";
import { FaRegNewspaper, FaBook } from "react-icons/fa";
import { GoSettings } from "react-icons/go"
import "./styles/Dashboard/sidenav.scss"

const Sidenav=()=>{
  const user = useAuth()
  const {id,token,role} = user
  const navigate = useNavigate()
  const [openclient, setOpenclient]= useState(false)
  const [opendrugs, setOpendrugs]= useState(false)
  const [drugCategories, setDrugCategories] = useState([])

  useEffect ( ()=>{
    const config={
      method: "GET",
      url: 'https://medipharm-test.herokuapp.com/api/drugscategories',
      headers:{
        Authorization: `Bearer ${token}`
      }
    }

    axios(config)
    .then(res=> setDrugCategories(res.data.data))
  },[token])
    return (
      <aside className="side-aside">
        
        <nav className="sidenav">
          <ul>
            <li className="nav-item" 
            onClick={()=> navigate("/dashboard") }>
              <RiDashboardFill />
              Dashboard
            </li>
            { (role === "client_admin" || "super_admin") &&
            <li className="nav-item"
            onClick={()=> navigate("/dashboard/Staff")}>
              <IoPeopleCircle />
              Staff
            </li>}
            <li className="nav-item d-flex_fd"
            onClick={()=> setOpenclient(!openclient)}>
              <RiBuildingLine />Client{openclient?<BiCaretUp/>:<BiCaretDown/>}
            </li>
            {openclient && 
            <span>
                <li onClick={()=> navigate("/dashboard/hospital")}><BiCaretRight/>Hospital</li>
                <li onClick={()=> navigate("/dashboard/pharmacy")}><BiCaretRight/>Pharmacy</li>
                <li onClick={()=> navigate("/dashboard/others")}><BiCaretRight/>Others</li>
              </span>}
            
           <li className="nav-item d-flex_fd"
            onClick={()=> setOpendrugs(!opendrugs)}>
              <RiBuildingLine />Drugs{opendrugs?<BiCaretUp/>:<BiCaretDown/>}
            </li>
            
                {opendrugs && drugCategories.map(item=>{
                  return <li key={item.id} onClick={()=>Navigate(`/dashboard/${item.name}`)}><BiCaretRight/>{item.name}</li>
                })
                  }
            
          {role !== "Pharmacist" && <li className="nav-item"
            onClick={()=>navigate("/dashboard/inventory") }>
              <FaRegNewspaper />
              Inventory
            </li>}
            <li className="nav-item"
            onClick={()=> navigate("/dashboard/subscription")}>
              <FaBook />
              Subscription
            </li>
            <li className="nav-item"
            onClick={()=>navigate("/dashboard/message") }>
              <BiMessageAltDetail />
              Message
            </li>
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