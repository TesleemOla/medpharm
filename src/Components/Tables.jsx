import React, { useState } from 'react'
import Loading from "./Loading"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { FaCaretDown} from "react-icons/fa"
import { useNavigate} from "react-router-dom"
import { MdEdit } from "react-icons/md"
import "./styles/Dashboard/dashtables.scss"
import Tablehead from './Tablehead'
import { useAuth } from './ProtectDashboard/AuthDash'


// Inventory Table 
export const InventoryTable = ({ field1, field2, field3, field4, field5,field6, field7, field8,array, 
  pageNo, setDataSize, handleNext, handlePrev}) => {
  const navigate = useNavigate()
  const user = useAuth()
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
                <td>{item.expired}</td>
                <td>{item.expiryDate.substring(0,10)}</td>
                <td>{item.status}</td>
                <td><MdEdit  onClick={()=> navigate(`/dashboard/editInventory/${item.id}`)}
                disabled={!(user.permissions.find((item)=> item === "update:inventory")) }/>
                <BiDotsVerticalRounded/></td>
              </tr>
            )
          })}
        </tbody>
        
      </table>
        <div className="foot">
                
                <select onChange={(e)=>setDataSize(e.target.value)}>
                  <option value="10" default >10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
            
                {pageNo===1? 1:10*(pageNo-1)}-{array.length<10? array.length: (10*pageNo)} of {array.length}
                <IoIosArrowBack onClick={()=>{
                   if(pageNo>1) return handlePrev}}/>
                <IoIosArrowForward  onClick={()=>{
                  if(array.length > (10*pageNo)) return handleNext}}/>
        </div>
      </div>
  )}else{
    return <Loading/>
  }
}

// Hospital Table
export const SupplierTable=({ array, pageNo, handleNext, handlePrev, setDataSize}) => {
  const navigate = useNavigate()
  if(array) {
  return (
    <div>
    <table className="dash-table">
        <Tablehead field1="Name" field2="Mobile" field3="Date Created" field4="Address"
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
                <td>{item.createdAt.substring(0,10)}</td>
                <td>{item.address}</td>
                <td>{item.status}</td>
                <td><MdEdit  onClick={()=> navigate(`/dashboard/editSupplier/${item.id}`)}/>
                <BiDotsVerticalRounded/></td>
              </tr>
            )
          })}
        </tbody>
        
      </table>
        <div className="foot">
                <select onChange={(e)=>setDataSize(e.target.value)}>
                  <option value="10" default >10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
                {pageNo===1? 1:10*(1)}-{array.length<10? array.length: (10*pageNo)} of {array.length}
                <IoIosArrowBack onClick={()=>{
                   if(pageNo>1) return handlePrev}}/>
                <IoIosArrowForward  onClick={()=>{
                  if(array.length > (10*pageNo)) return handleNext}}/>
        </div>  
      </div>
  )}else{
    return <Loading/>
        }
}

// Staff table
export const ManufacturerTable = ({ array, pageNo, handleNext, handlePrev, setDataSize})=>{
  const navigate = useNavigate()
  if(array){
  return(
    <div>
    <table className="dash-table">
        <Tablehead field1="Name" field2="Mobile"
       field3="Address" field4="Date" field5="Status" field6="Action" />
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
                <td>{item.address}</td>
                <td>{item.createdAt.substring(0,10)}</td>
                <td>{item.status}</td>
                <td><MdEdit  onClick={()=> navigate(`/dashboard/editManufacturer/${item.id}`)}/>
                <BiDotsVerticalRounded/></td>
                
              </tr>
            )
          })}
        </tbody>
        
      </table>
        <div className="foot">
                <select onChange={(e)=>setDataSize(e.target.value)}>
                  <option value="10" default >10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
                {pageNo===1? 1:10*(pageNo-1)}-{array.length<10? array.length: (10*pageNo)} of {array.length}
                <IoIosArrowBack onClick={()=>{
                   if(pageNo>1) return handlePrev}}/>
                <IoIosArrowForward  onClick={()=>{
                  if(array.length > (10*pageNo)) return handleNext}}/>
        </div>  
      </div>
  )}else{
    return <Loading/>
        }
}

// Drugs Table

export const DrugsTable=({ array, pageNo, handleNext, handlePrev, setDataSize})=>{
  const navigate = useNavigate()
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
                <td><MdEdit  onClick={()=> navigate(`/dashboard/editDrugs/${item.id}`)}/>
                <BiDotsVerticalRounded/></td>
              </tr>
            )
          })}
        </tbody>
        
      </table>
        <div className="foot">
                <select onChange={(e)=>setDataSize(e.target.value)}>
                  <option value="10" default >10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
                {pageNo===1? 1:10*(pageNo-1)}-{array.length<10? array.length: (10*pageNo)} of {array.length}
                <IoIosArrowBack onClick={()=>{
                   if(pageNo>1) return handlePrev}}/>
                <IoIosArrowForward  onClick={()=>{
                  if(array.length > (10*pageNo)) return handleNext}}/>
        </div>  
      </div>
  )}else{
    return <Loading/>
        }
}

// Drug Category Tables
export const DrugCategoryTable=({ array, pageNo, handleNext, handlePrev, setDataSize})=>{
  const navigate = useNavigate()
  if(array){
  return(
    <div>
    <table className="dash-table">
        <Tablehead field1="Name" field2="Description" field3="Status"
        field4="Created At" field5="Updated By" field6="Created By"  field7="Action" />
        <tbody>
          {array.map(({name, status, description, updatedBy, id, createdBy, createdAt }, index)=>{
            return (
              <tr  className={index%2? "grayback": "whiteback"}
              key={id}>
                <td>
                  <input type="checkbox"/>
                </td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{status}</td>
                <td>{createdAt.substring(0,10)}</td>
                <td>{updatedBy}</td>
                <td>{createdBy}</td>
                <td><MdEdit  onClick={()=> navigate(`/dashboard/editDrugCategory/${id}`)}/>
                <BiDotsVerticalRounded/></td>
              </tr>
            )
          })}
        </tbody>
        
      </table>
        <div className="foot">
                <select onChange={(e)=>setDataSize(e.target.value)}>
                  <option value="10" default >10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
                {pageNo===1? 1:10*(pageNo-1)}-{array.length<10? array.length: (10*pageNo)} of {array.length}
                <IoIosArrowBack onClick={()=>{
                   if(pageNo>1) return handlePrev}}/>
                <IoIosArrowForward  onClick={()=>{
                  if(array.length > (10*pageNo)) return handleNext}}/>
        </div>  
      </div>
  )}else{
    return <Loading/>
        }
}

// Dispatched drugs table

export const DispatchedTable=({ array, pageNo, handleNext, handlePrev, setDataSize})=>{
  const navigate = useNavigate()
  if(array){
  return(
    <div>
    <table className="dash-table">
        <Tablehead field1="DrugName" field2="ClientName" field3="Expiry"
         field4="Pack size" field5="Package type"
          field6="Status" field7="Quantity dispached"
          field8="Action" />
        <tbody>
          {array.map((item,index)=>{
            return (
              <tr  className={index%2? "grayback": "whiteback"}
              key={item.id}>
                <td>
                  <input type="checkbox"/>
                </td>
                <td>{item.drugName}</td>
                <td>{item.clientName}</td>
                <td>{item.expiryDate.substring(0,10)}</td>
                <td>{item.noInPackage}</td>
                <td>{item.packageType}</td>
                <td>{item.dispatchedStatus}</td>
                <td>{item.quantity-item.quantityReturned}</td>
                <td><MdEdit  onClick={()=> navigate(`/dashboard/editDispatcheddrugs/${item.id}`)}/>
                <BiDotsVerticalRounded/></td>
              </tr>
            )
          })}
        </tbody>
        
      </table>
        <div className="foot">
                <select onChange={(e)=>setDataSize(e.target.value)}>
                  <option value="10" default >10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
                {pageNo===1? 1:10*(pageNo-1)}-{array.length<10? array.length: (10*pageNo)} of {array.length}
                <IoIosArrowBack onClick={()=>{
                   if(pageNo>1) return handlePrev}}/>
                <IoIosArrowForward  onClick={()=>{
                  if(array.length > (10*pageNo)) return handleNext}}/>
        </div>  
      </div>
  )}else{
    return <Loading/>
        }
}

// Organisation Table

export const OrganisationTable=({ array, pageNo, handleNext, handlePrev, setDataSize})=>{
  const navigate = useNavigate()
  const user = useAuth()
  if(array){
  return(
    <div>
    <table className="dash-table">
        <Tablehead field1="Name" field2="Email" field3="Address"
        field4="Phone Number" field5="Client Type" field6="Client Code"  field7="Action" />
        <tbody>
          {array.map(({companyName, contactEmailAddress, officeAddress, clientType, clientCode,
          contactPhoneNumber, id }, index)=>{
            return (
              <tr  className={index%2? "grayback": "whiteback"}
              key={id}>
                <td>
                  <input type="checkbox"/>
                </td>
                <td>{companyName}</td>
                <td>{contactEmailAddress}</td>
                <td>{officeAddress}</td>
                <td>{contactPhoneNumber}</td>
                <td>{clientType}</td>
                <td>{clientCode}</td>
                
                <td> 
                <BiDotsVerticalRounded onClick={()=> navigate(`/dashboard/Organisation/suborg/${id}`)}
                disabled={!(user.permissions.find((item)=> item === "update:organisation")) }/></td>
              </tr>
            )
          })}
        </tbody>
        
      </table>
        <div className="foot">
                <select onChange={(e)=>setDataSize(e.target.value)}>
                  <option value="10" default >10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
                {pageNo===1? 1:10*(pageNo-1)}-{array.length<10? array.length: (10*pageNo)} of {array.length}
                <IoIosArrowBack onClick={()=>{
                   if(pageNo>1) return handlePrev}}/>
                <IoIosArrowForward  onClick={()=>{
                  if(array.length > (10*pageNo)) return handleNext}}/>
        </div>  
      </div>
  )}else{
    return <Loading/>
        }
}

 