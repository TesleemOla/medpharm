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
import "./styles/Dashboard/sidenav.scss"

const Sidenav=()=>{
  const user = useAuth()

  const navigate = useNavigate()

    return (
      <aside className="side-aside">
        
        <nav className="sidenav">
          <ul>
            <li className="nav-item" 
            onClick={()=> navigate("/") }>
              <RiDashboardFill />
              Dashboard
            </li>
            {(user.permissions.find((item)=> item === "view:organisation")) &&           
            <li className="nav-item"
            onClick={()=> navigate("/dashboard/Organisation/suborg")}>
              <FaBook />
              Organisations
            </li>}
            <li className="nav-item"
            onClick={()=> navigate("/dashboard/manufacturers")}>
              <FaBuilding/>
              Manufacturers
            </li>
            <li className="nav-item" onClick={()=> navigate("/dashboard/Suppliers")}>
              <IoPeopleCircle />Suppliers</li>
                
              <li className="nav-item"
            onClick={()=> navigate("/dashboard/drugs")}>
              <FaBook />
              Drugs
            </li>
           
           <li className="nav-item d-flex_fd"
            onClick={()=>navigate(`/dashboard/drugcategory`)}>
              <GiMedicines/>Drug Type
            </li>
            
            <li className="nav-item"
            onClick={()=>navigate("/dashboard/Dispatcheddrugs") }>
              <GiMedicines />
              Dispatched Drugs
            </li>
          {(user.role ==="super_admin" || user.permissions.find((item)=> item === "view:inventory")) && 
          <li className="nav-item"
            onClick={()=>navigate("/dashboard/inventory") }>
              <FaRegNewspaper />
              Inventory
            </li>}
            
          </ul>
        </nav>
      </aside>
    );
}

export default Sidenav