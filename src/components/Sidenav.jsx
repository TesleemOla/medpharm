import React, {useState}from "react";
import "./styles/OnboardingPage/sidenav.scss"
import { RiDashboardFill, RiBuildingLine } from "react-icons/ri";
import { IoPeopleCircle } from "react-icons/io5"
import { BiCapsule, BiMessageAltDetail, BiCaretDown, BiCaretUp, BiCaretRight } from "react-icons/bi";
import { FaRegNewspaper, FaBook } from "react-icons/fa";
import { GoSettings } from "react-icons/go"

const Sidenav=({selected, setSelected})=>{
  const [opendropdown, setOpendropdown]= useState(false)
    return (
      <aside className="side-aside">
        
        <nav className="sidenav">
          <ul>
            <li className="nav-item" 
            onClick={()=> setSelected("Dashboard")}>
              <RiDashboardFill />
              Dashboard
            </li>
            <li className="nav-item"
            onClick={()=> setSelected("Staff")}>
              <IoPeopleCircle />
              Staff
            </li>
            <li className="nav-item d-flex_fd"
            onClick={()=> setOpendropdown(!opendropdown)}>
              <RiBuildingLine />Client{opendropdown?<BiCaretUp/>:<BiCaretDown/>}
            </li>
            {opendropdown && 
            <span>
                <li onClick={()=> setSelected("Hospital")}><BiCaretRight/>Hospital</li>
                <li onClick={()=> setSelected("Pharmacy")}><BiCaretRight/>Pharmacy</li>
                <li onClick={()=> setSelected("Others")}><BiCaretRight/>Others</li>
              </span>}
            
            <li className="nav-item"
            onClick={()=> setSelected("Drugs")}>
              <BiCapsule />
              Drugs
            </li>
            <li className="nav-item"
            onClick={()=> setSelected("Inventory")}>
              <FaRegNewspaper />
              Inventory
            </li>
            <li className="nav-item"
            onClick={()=> setSelected("Subscription")}>
              <FaBook />
              Subscription
            </li>
            <li className="nav-item"
            onClick={()=> setSelected("Message")}>
              <BiMessageAltDetail />
              Message
            </li>
            <li className="nav-item"
            onClick={()=> setSelected("Settings")}>
              <GoSettings />
              Settings
            </li>
          </ul>
        </nav>
      </aside>
    );
}

export default Sidenav