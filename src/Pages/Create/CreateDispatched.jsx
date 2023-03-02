import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify"
import { baseurl } from '../../Components/utils/baseurl'
import { useNavigate } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'
import { useAuth } from '../../Components/ProtectDashboard/AuthDash'
import "../../Components/styles/Dashboard/manufacturer/manufacturer.scss"

const CreateDispatched = () => {
    const user = useAuth()
    
    const navigate = useNavigate()
    const [dispatched, setDispatched] = useState({
    inventoryId: "",
    quantity: 1,
    clientId: user.clientId? user.clientId: null
    })
    
    function handleCreate(e){
        e.preventDefault();
        if(!dispatched.inventoryId){
            toast("Please add an Inventory Id")
        }else{
            const config={
                method: "POST",
                url: `${baseurl}/api/dispatcheddrugs`,
                headers: {
                    Authorization: `Bearer ${user.token}`
                },
                data: dispatched
            }
            axios(config)
            .then(res=> toast("New Inventory Dispatched"))
            .catch(err=> toast(err.message))
        }
    }
  return (
     <div className="center-dash">
        <ToastContainer/>
        <form className="manuf-form">
           
             <div  className="light-back">
                <p>Create Dispatched Drug</p>
                <GrClose onClick={()=> navigate("/dashboard/Dispatcheddrugs")}/>          
            </div>
            
                <div className="input-grid">
                    <div className="input-div">
                        <label>Inventory I.D</label>
                        <div>
                            <input type="text"  onChange={(e)=> setDispatched({...dispatched, inventoryId: e.target.value })}/>
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Quantity</label>
                        <div>
                            <input type="text"  placeholder={dispatched.quantity}
                             onChange={(e)=> setDispatched({...dispatched, quantity: e.target.value })}/>
                        </div>
                    </div>
                
                </div>
                <button className="manuf-btn"
                    onClick={(e)=> handleCreate(e)}> Create drugCategory</button>
                </form>
            </div>
  )
}

export default CreateDispatched