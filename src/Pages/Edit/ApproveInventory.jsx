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
  const [inventoryItem, setInventoryItem] = useState({})
  const [updateItem, setUpdateItem] = useState( {
  approvalLevel: '',
  remarks: "",
  quantityApproved: 1
})

useEffect(()=>{
  const config={
    method: 'GET',
    url: `${baseurl}/api/inventories/${id}`,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  }
  axios(config)
  .then(res=> setInventoryItem(res.data.data))
  .catch(err=> console.error(err))
},[id, user])
  function handleApprove(e){
    e.preventDefault()
    if(!updateItem.approvalLevel || !updateItem.remarks || !updateItem.quantityApproved){
      toast(`All fields are required`)
      return
    }
    const config ={
      method: 'PUT',
      url: `${baseurl}/api/inventories/${id}/approval`,
      headers:{
        Authorization: `Bearer ${user.token}`
      },
      data: updateItem
    }
    axios(config)
    .then(res=> {
      toast('Updated Successfully')
      navigate(-1)
    })
    .catch(err=> toast(err.message))
  }
  return (
    <div className="center-dash">
      <ToastContainer />
       <form className="manuf-form">
             <div  className="light-back">
                <p>Edit Dispatched Drug</p>
                <GrClose onClick={()=> navigate(-1)}/>          
            </div>
            
                <div className="input-flex">
                        
                        <div>
                            <label>Approval Level</label>
                            
                            <select onChange={(e)=> setUpdateItem({...updateItem, approvalLevel: e.target.value})}>
                              <option value={inventoryItem.approval}>{inventoryItem.approval}</option>
                              {aLevel.filter((item)=> item !== inventoryItem.approval ).map((item,i)=>{
                                return <option value={item} key={i}>{item}</option>
                              })}
                            </select>
                        </div>
                        <div>
                            <label>Remarks</label>
                            <input type="text" placeholder={inventoryItem.quantityReturned}
                              onChange={(e)=> setUpdateItem({...updateItem, remarks: e.target.value })}/>
                        </div>              
                        
                        <div>
                            <label>Quantity Approved</label>
                            <input type="text" placeholder={inventoryItem.quantityReturned}
                              onChange={(e)=> setUpdateItem({...updateItem, quantityApproved: e.target.value })}/>
                        </div>
                 
                </div>
                        <button className="manuf-btn"
                        onClick={(e)=> handleApprove(e) }> Edit inventoryItem</button>
               
                </form>
    </div>
  )
}

export default ApproveInventory