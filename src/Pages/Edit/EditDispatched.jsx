import React, { useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
import { GrClose } from 'react-icons/gr'
import { useAuth } from '../../Components/ProtectDashboard/AuthDash'
import { baseurl } from '../../Components/utils/baseurl'
import "../../Components/styles/Dashboard/manufacturer/manufacturer.scss"

const EditDispatched = () => {
     const user = useAuth()
    const {id} = useParams()
    const [dispatchedItem, setDispatchedItem] = useState({
  remarks: "",
  quantityReturned: 1,
  clientId: user.clientId
})


function handleEdit(e){
    e.preventDefault()
    const config = {
        method: "PUT",
        url: `${baseurl}/api/dispatcheddrugs/${id}/returned`,
        headers: {
            Authorization: `Bearer ${user.token}`
        },
        data: dispatchedItem
    }
  if(!dispatchedItem.remarks){
            toast("Please fill all fields")
        }else{
            
    axios(config)
    .then(res=>{ toast("Dispatched drug Edited")
                    navigate(-1)})
    .catch(err=> toast(err.message))
        }
}
const navigate = useNavigate()
  return (
    <div className="center-dash">
        <ToastContainer/>
        <form className="manuf-form">
             <div  className="light-back">
                <p>Edit Dispatched Drug</p>
                <GrClose onClick={()=> navigate(-1)}/>          
            </div>
            
                <div className="input-flex">
                   
                        
                        <div>
                            <label>Remarks</label>
                            <input type="text" 
                             onChange={(e)=> setDispatchedItem({...dispatchedItem, remarks: e.target.value })}/>
                        </div>
               
                   
                        
                        <div>
                            <label>Quantity Returned</label>
                            <input type="text" defaultValue={dispatchedItem.quantityReturned}
                              onChange={(e)=> setDispatchedItem({...dispatchedItem, quantityReturned: e.target.value })}/>
                        </div>
                 
                  

                </div>
                        <button className="manuf-btn"
                        onClick={(e)=> handleEdit(e) }> Edit dispatchedItem</button>
               
                </form>
    </div>
  )
}

export default EditDispatched