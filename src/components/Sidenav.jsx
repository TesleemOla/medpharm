import React from "react";
import "./styles/OnboardingPage/sidenav.scss"
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
            <li className="nav-item d-flex_jcc-aic">
              <RiDashboardFill />
              Dashboard
            </li>
            <li className="nav-item d-flex_jcc-aic">
              <IoPeopleCircle />
              Staff
            </li>
            <li className="nav-item d-flex_jcc-aic">
              <RiBuildingLine />
              Client
            </li>
            <li className="nav-item d-flex_jcc-aic">
              <BiCapsule />
              Drugs
            </li>
            <li className="nav-item d-flex_jcc-aic">
              <FaRegNewspaper />
              Inventory
            </li>
            <li className="nav-item d-flex_jcc-aic">
              <FaBook />
              Subscription
            </li>
            <li className="nav-item d-flex_jcc-aic">
              <BiMessageAltDetail />
              Message
            </li>
            <li className="nav-item d-flex_jcc-aic">
              <GoSettings />
              Settings
            </li>
          </ul>
        </nav>
      </aside>
    );
}

export default Sidenav