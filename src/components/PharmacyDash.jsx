import React from "react";
// import axios from "axios";
// import { useTable, useGlobalFilter, usePagination } from "react-table";
import { data } from "./MOCK_DATA";
// import PharmTableComp from "./PharmTableComp";
import "./styles/Pharmacy.scss";

const PharmacyDash = () => {
  const handlePrevious = (e) => {
    e.preventDefault();
  };

  const handleNext = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
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

        {data.map((item) => {
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
        })}
      </table>
      <div className="paginate">
        <button onClick={handlePrevious}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default PharmacyDash;
