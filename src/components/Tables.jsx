import React from 'react'
import Loading from "./Loading"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { FaCaretDown} from "react-icons/fa"
import { MdEdit } from "react-icons/md"
import "./styles/Dashboard/dashtables.scss"

// Inventory Table 
export const InventoryTable = ({ field1, field2, field3, field4, field5,field6, field7, field8,array, pageNo}) => {
  if(array.length > 0) {
  return (
    <div>
    <table className="dash-table">
        <thead>
          <tr>
          <td>
            <input type="checkbox"/>
          </td>
          <td>
            {field1}
          </td>
          <td>
            {field2}
          </td>
          <td>{field3}</td>
          <td>{field4}</td>
          <td>{field5}</td>
          <td>{field6}</td>
          <td>{field7}</td>
          <td>{field8}</td>
          </tr>
        </thead>
        <tbody>
          {array.map((item,index)=>{
            return (
              <tr  className={index%2? "grayback": "whiteback"}
              key={item.id}>
                <td>
                  <input type="checkbox"/>
                </td>
                <td>{item.drugName}</td>
                <td>{item.drugId}</td>
                <td>{item.packageType}</td>
                <td>{item.quantityLeft}</td>
                <td>{item.amount}</td>
                <td>{item.expiryDate}</td>
                <td>{item.status}</td>
                <td><MdEdit/></td>
              </tr>
            )
          })}
        </tbody>
        
      </table>
            <div className="foot">
                {pageNo}
                <FaCaretDown/>
                10 - {array.length}
                <IoIosArrowBack/><IoIosArrowForward/>
        </div>  
      </div>
  )}else{
    return <Loading/>
  }
}

export const HospitalTable=()=>({ field1, field2, field3, field4, field5,field6, field7, field8,array, pageNo}) => {
  if(array.length > 0) {
  return (
    <div>
    <table className="dash-table">
        <thead>
          <tr>
          <td>
            <input type="checkbox"/>
          </td>
          <td>
            {field1}
          </td>
          <td>
            {field2}
          </td>
          <td>{field3}</td>
          <td>{field4}</td>
          <td>{field5}</td>
          <td>{field6}</td>
          <td>{field7}</td>
          <td>{field8}</td>
          </tr>
        </thead>
        <tbody>
          {array.map((item,index)=>{
            return (
              <tr  className={index%2? "grayback": "whiteback"}
              key={item.id}>
                <td>
                  <input type="checkbox"/>
                </td>
                <td>{item.drugName}</td>
                <td>{item.drugId}</td>
                <td>{item.packageType}</td>
                <td>{item.quantityLeft}</td>
                <td>{item.amount}</td>
                <td>{item.expiryDate}</td>
                <td>{item.status}</td>
                <td><MdEdit/></td>
              </tr>
            )
          })}
        </tbody>
        
      </table>
            <div className="foot">
                {pageNo}
                <FaCaretDown/>
                10 - {array.length}
                <IoIosArrowBack/><IoIosArrowForward/>
        </div>  
      </div>
  )}else{
    return <Loading/>
  }
}