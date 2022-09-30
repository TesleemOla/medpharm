import React from "react";
import "./styles/sidenav.scss"
import { RiDashboardFill, RiBuildingLine } from "react-icons/ri";
import { IoPeopleCircle } from "react-icons/io5"
import { BiCapsule, BiMessageAltDetail } from "react-icons/bi";
import { FaRegNewspaper, FaBook } from "react-icons/fa";
import { GoSettings } from "react-icons/go"

const Sidenav=()=>{
    return (
      <aside>
        <nav className="sidenav">
          <ul>
            <li className="nav-item d-flex">
              <RiDashboardFill />
              Dashboard
            </li>
            <li className="nav-item d-flex">
              <IoPeopleCircle />
              Staff
            </li>
            <li className="nav-item d-flex">
              <RiBuildingLine />
              Client
            </li>
            <li className="nav-item d-flex">
              <BiCapsule />
              Drugs
            </li>
            <li className="nav-item d-flex">
              <FaRegNewspaper />
              Inventory
            </li>
            <li className="nav-item d-flex">
              <FaBook />
              Subscription
            </li>
            <li className="nav-item d-flex">
              <BiMessageAltDetail />
              Message
            </li>
            <li className="nav-item d-flex">
              <GoSettings />
              Settings
            </li>
          </ul>
        </nav>
      </aside>
    );
}

export default Sidenav