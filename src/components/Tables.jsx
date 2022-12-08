import React from 'react'
import Loading from "./Loading"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { FaCaretDown} from "react-icons/fa"
import {useNavigate} from "react-router-dom"
import { MdEdit } from "react-icons/md"
import "./styles/Dashboard/dashtables.scss"
import Tablehead from './Tablehead'

// Inventory Table 
export const InventoryTable = ({ field1, field2, field3, field4, field5,field6, field7, field8,array,handleEdit, pageNo}) => {
  const Navigate = useNavigate()
  if(array.length > 0) {
  return (
    <div className="table-div">
    <table className="dash-table">
        <Tablehead field1={field1} field2={field2} field3={field3}
        field4={field4} field5={field5} field6={field6} field7={field7} 
        field8={field8} />
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
                <td onClick={()=> Navigate(`/dashboard/editInventory/${item.id}`)}><MdEdit/></td>
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

// Hospital Table
export const HospitalTable=({ field1, field2, field3, field4, field5,field6, field7, field8,array, pageNo}) => {
  const Navigate = useNavigate()
  if(array) {
  return (
    <div>
    <table className="dash-table">
        <Tablehead field1={field1} field2={field2} field3={field3}
        field4={field4} field5={field5} field6={field6} field7={field7}  />
        <tbody>
          {array.map((item,index)=>{
            return (
              <tr  className={index%2? "grayback": "whiteback"}
              key={item.id}>
                <td>
                  <input type="checkbox"/>
                </td>
                <td>{item.name}</td>
                <td>{item.id}</td>
                <td>{item.mobile}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.status}</td>
                <td onClick={()=> Navigate(`/dashboard/editPharmacy/${item.id}`)}><MdEdit/></td>
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