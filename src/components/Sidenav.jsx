import React, {useState}from "react";
import { useNavigate } from "react-router-dom";
import { RiDashboardFill, RiBuildingLine } from "react-icons/ri";
import { IoPeopleCircle } from "react-icons/io5"
import { BiCapsule, BiMessageAltDetail, BiCaretDown, BiCaretUp, BiCaretRight } from "react-icons/bi";
import { FaRegNewspaper, FaBook } from "react-icons/fa";
import { GoSettings } from "react-icons/go"
import "./styles/Dashboard/sidenav.scss"

const Sidenav=()=>{
  const navigate = useNavigate()
  const [openclient, setOpenclient]= useState(false)
  const [opendrugs, setOpendrugs]= useState(false)
    return (
      <aside className="side-aside">
        
        <nav className="sidenav">
          <ul>
            <li className="nav-item" 
            onClick={()=> navigate("/dashboard") }>
              <RiDashboardFill />
              Dashboard
            </li>
            <li className="nav-item"
            onClick={()=> navigate("/dashboard/Staff")}>
              <IoPeopleCircle />
              Staff
            </li>
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
            {opendrugs && 
            <span>
                <li onClick={()=> console.log("category")}><BiCaretRight/>Category I</li>
                <li onClick={()=> console.log("category")}><BiCaretRight/>Category II</li>
                <li onClick={()=> console.log("category")}><BiCaretRight/>Category III</li>
              </span>}
            <li className="nav-item"
            onClick={()=>navigate("/dashboard/inventory") }>
              <FaRegNewspaper />
              Inventory
            </li>
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