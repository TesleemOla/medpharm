import React from "react";
import hocard from './hocard'

import Tablenav from "./Tablenav"
import tile1 from "./images/tile-icon1.png"
import tile2 from "./images/tile-icon2.png"
import AuthContext from "../Context/AuthContext";
import item1 from "./images/item(1).png"
import item2 from "./images/item(2).png"
import item3 from "./images/item(3).png"
import Carddets from './Carddets'
import "./styles/Pharmacy.scss";

const PharmacyDash = () => {
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
      <div className="pharmRow">
        <div id="title">
          <h4>Pharmacy</h4>
          <input
            type="search"
            placeholder="Search Organisation"
            name=""
            id="pharmSearch"
          />
          <i></i>
        </div>

        <div id="addPharmFilter">
          <div>
            <select name="filter" id="filter">
              <option>Filter</option>
            </select>
          </div>
          <div className="addPharm">
            <span>+</span>
            <div>Add Pharmacy</div>
          </div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="" id="" />
            </th>
            <th>Name</th>
            <th>Pharmacy ID</th>
            <th>Mobile</th>
            <th>E-mail</th>
            <th>Address</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        {/* {data.map((item) => {
          return (
            <tbody key={item.id}>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>{item.name}</td>
                <td>{item.pharmacy}</td>
                <td>{item.mobile}</td>
                <td>{item.mail}</td>
                <td>{item.address}</td>
                <td>{item.status}</td>
                <td>{item.actions}</td>
              </tr>
            </tbody>
          );
        })} */}
      </table>
      <div className="paginate">
        <button onClick={handlePrevious}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}


export default PharmacyDash;
