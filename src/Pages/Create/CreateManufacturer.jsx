import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'
import { useAuth } from '../../Components/ProtectDashboard/AuthDash'
import "../../Components/styles/Dashboard/Inventory/createinv.scss"

const CreateManufacturer = () => {
    const user = useAuth()
    
    const navigate = useNavigate()
    const [manufacturer, setManufacturer] = useState({
  name: "string",
  address: "string",
  phoneNumber: "string",
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
                        <label>Name</label>
                        <div>
                            <input type="text"  onChange={(e)=> setManufacturer({...manufacturer, name: e.target.value })}/>
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Address</label>
                        <div>
                            <input type="text"   onChange={(e)=> setManufacturer({...manufacturer, address: e.target.value })}/>
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Phone Number</label>
                        <div>
                            <input type="text"   onChange={(e)=> setManufacturer({...manufacturer, phoneNumber: e.target.value })}/>
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Client ID</label>
                        <div>
                            <input type="text"  disabled placeholder = {manufacturer.clientId}/>
                        </div>
                    </div>
               
                </div>
                </form>
            </div>
  )
}

export default CreateManufacturer