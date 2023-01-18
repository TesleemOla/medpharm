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
                <td>{item.batchNumber}</td>
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
                {10*pageNo}-{(10*pageNo)+10} of {array.length}
                <IoIosArrowBack/><IoIosArrowForward/>
        </div>  
      </div>
  )}else{
    return <Loading/>
  }
}

// Hospital Table
export const HospitalTable=({ array, pageNo}) => {
  const Navigate = useNavigate()
  if(array) {
  return (
    <div>
    <table className="dash-table">
        <Tablehead field1="Name" field2="Mobile" field3="Email" field4="Address"
        field5="Status" field6="Action" />
        <tbody>
          {array.map((item,index)=>{
            return (
              <tr  className={index%2? "grayback": "whiteback"}
              key={item.id}>
                <td>
                  <input type="checkbox"/>
                </td>
                <td>{item.name}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.status}</td>
                <td onClick={()=> Navigate(`/dashboard/editHospital/${item.id}`)}><MdEdit/></td>
              </tr>
            )
          })}
        </tbody>
        
      </table>
            <div className="foot">
                {pageNo}
                <FaCaretDown/>
                {10*pageNo}-{(10*pageNo)+10} of {array.length}
                <IoIosArrowBack/><IoIosArrowForward/>
        </div>  
      </div>
  )}else{
    return <Loading/>
        }
}

// Staff table
export const StaffTable = ({ array, pageNo})=>{
  const Navigate = useNavigate()
  if(array){
  return(
    <div>
    <table className="dash-table">
        <Tablehead field1="Name" field2="Designation" field3="Mobile"
       field4="Address" field5="Date" field6="Status" field7="Action" />
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
                <td>{item.phoneNumber}</td>
                <td>{item.address}</td>
                <td>{item.createdAt}</td>
                <td>{item.status}</td>
                <td onClick={()=> Navigate(`/dashboard/editStaff/${item.id}`)}><MdEdit/></td>
                
              </tr>
            )
          })}
        </tbody>
        
      </table>
            <div className="foot">
                10
                <FaCaretDown/>
                {10*pageNo}-{(10*pageNo)+10} of {array.length}
                <IoIosArrowBack/><IoIosArrowForward/>
        </div>  
      </div>
  )}else{
    return <Loading/>
        }
}

// Drugs Table

export const DrugsTable=({ array, pageNo})=>{
  const Navigate = useNavigate()
  if(array){
  return(
    <div>
    <table className="dash-table">
        <Tablehead field1="Name" field2="Product I.D" field3="Drug Category"
        field4="Treatment for" field5="Pack size" field6="Status"  field7="Action" />
        <tbody>
          {array.map((item,index)=>{
            return (
              <tr  className={index%2? "grayback": "whiteback"}
              key={item.id}>
                <td>
                  <input type="checkbox"/>
                </td>
                <td>{item.drugName}</td>
                <td>{item.productId}</td>
                <td>{item.categoryName}</td>
                <td>{item.treatmentUsedFor}</td>
                <td>{item.noInPackage}</td>
                <td>{item.status}</td>
                <td onClick={()=> Navigate(`/dashboard/editDrugs/${item.id}`)}><MdEdit/></td>
              </tr>
            )
          })}
        </tbody>
        
      </table>
            <div className="foot">
                10
                <FaCaretDown/>
                {10*pageNo}-{(10*pageNo)+10} of {array.length}
                <IoIosArrowBack/><IoIosArrowForward/>
        </div>  
      </div>
  )}else{
    return <Loading/>
        }
}
