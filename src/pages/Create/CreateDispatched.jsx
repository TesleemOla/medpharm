import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'
import { useAuth } from '../../Components/ProtectDashboard/AuthDash'
import "../../Components/styles/Dashboard/Inventory/createinv.scss"

const CreateDispatched = () => {
    const user = useAuth()
    
    const navigate = useNavigate()
    const [dispatched, setDispatched] = useState({
  inventoryId: "",
  quantity: 1,
  clientId: user.clientId

    })
    const [error, setError] = useState()
  return (
     <div className="center-dash">
        <ToastContainer/>
        <form className="cinv-form">
            <p className="error">{error}</p>
             <div  className="light-back">
                <p>Create Inventory</p>
                <GrClose onClick={()=> navigate("/dashboard/inventory")}/>          
            </div>
            
                <div>
                    <div className="input-div">
                        <label>Inventory I.D</label>
                        <div>
                            <input type="text"  onChange={(e)=> setDispatched({...dispatched, inventoryId: e.target.value })}/>
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Quantity</label>
                        <div>
                            <input type="text"   onChange={(e)=> setDispatched({...dispatched, quantity: e.target.value })}/>
                        </div>
                    </div>
                 
                    <div className="input-div">
                        <label>Client ID</label>
                        <div>
                            <input type="text"  disabled placeholder = {dispatched.clientId}/>
                        </div>
                    </div>
               
                </div>
                </form>
            </div>
  )
}

export default CreateDispatched