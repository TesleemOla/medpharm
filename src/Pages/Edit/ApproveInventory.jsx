import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { GrClose } from 'react-icons/gr'
import { ToastContainer, toast } from 'react-toastify'
import { baseurl } from "../../Components/utils/baseurl"
import { useParams, useNavigate } from "react-router-dom"
import "../../Components/styles/Dashboard/manufacturer/manufacturer.scss"
import { useAuth } from '../../Components/ProtectDashboard/AuthDash'

const ApproveInventory = () => {
  const user = useAuth()
  const navigate = useNavigate();
  const aLevel = ["WAITING", "APPROVED", 'REJECTED']
  const {id} = useParams()
  const [inventoryItem, setInventoryItem] = useState( {
  approvalLevel: "WAITING",
  remarks: "string",
  quantityApproved: 1
})
  function handleApprove(e){
    e.preventDefault()
    const config ={
      method: 'PUT',
      url: `${baseurl}/api/inventories/${id}/approval`,
      headers:{
        Authorization: `Bearer ${user.token}`
      }
    }
    axios(config)
    .then(res=> console.log(res))
  }
  return (
    <div className="center-dash">
      <ToastContainer />
       <form className="manuf-form">
             <div  className="light-back">
                <p>Edit Dispatched Drug</p>
                <GrClose onClick={()=> navigate("/dashboard/dispatcheddrugs")}/>          
            </div>
            
                <div className="input-grid">
                        
                        <div>
                            <label>Approval Level</label>
                            <select>
                              {aLevel.map((item,i)=>{
                                return <option value={item} key={i}>{item}</option>
                              })}
                            </select>
                        </div>
                        <div>
                            <label>Remarks</label>
                            <input type="text" placeholder={inventoryItem.quantityReturned}
                              onChange={(e)=> setInventoryItem({...inventoryItem, remarks: e.target.value })}/>
                        </div>              
                        
                        <div>
                            <label>Quantity Approved</label>
                            <input type="text" placeholder={inventoryItem.quantityReturned}
                              onChange={(e)=> setInventoryItem({...inventoryItem, quantityApproved: e.target.value })}/>
                        </div>
                 
                </div>
                        <button className="manuf-btn"
                        onClick={(e)=> handleApprove(e) }> Edit inventoryItem</button>
               
                </form>
    </div>
  )
}

export default ApproveInventory