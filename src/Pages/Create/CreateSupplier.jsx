import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'
import { useAuth } from '../../Components/ProtectDashboard/AuthDash'
import { baseurl } from '../../Components/utils/baseurl'
import "../../Components/styles/Dashboard/manufacturer/manufacturer.scss"

const CreateSupplier = () => {
   const user = useAuth()
    
    const navigate = useNavigate()
    const [manufacturer, setManufacturer] = useState({
  name: "",
  address: "",
  phoneNumber: "",
  clientId: user.clientId

    })

    function handleCreate(e){
    e.preventDefault()
    const config = {
        method: "POST",
        url: `${baseurl}/api/suppliers`,
        headers: {
            Authorization: `Bearer ${user.token}`
        },
        data: manufacturer
    }
    if(!manufacturer.clientId){
        toast("You are not authorized to create a manufacturer")
    }
    else if(!manufacturer.name || !manufacturer.address || 
        !manufacturer.phoneNumber){
            toast("Please fill all fields")
        }else{
            
    axios(config)
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
        }
}
  return (
     <div className="center-dash">
        <ToastContainer/>
        <form className="manuf-form">

             <div  className="light-back">
                <p>Create Supplier</p>
                <GrClose onClick={()=> navigate("/")}/>          
            </div>
            
                <div className="input-grid">
        
                        
                        <div>
                            <label>Name</label>
                            <input type="text"  onChange={(e)=> setManufacturer({...manufacturer, name: e.target.value })}/>
                        </div>
             
        
                        
                        <div>
                            <label>Address</label>
                            <input type="text"   onChange={(e)=> setManufacturer({...manufacturer, address: e.target.value })}/>
                        </div>
             
        
                        
                        <div>
                            <label>Phone Number</label>
                            <input type="text"   onChange={(e)=> setManufacturer({...manufacturer, phoneNumber: e.target.value })}/>
                        </div>
              
        
                        
                        <div>
                            <label>Client ID</label>
                            <input type="text"  disabled placeholder = {user.clientId}/>
                        </div>

                       
               
                </div>
                 <button className="manuf-btn"
                 onClick={(e)=> handleCreate(e)}> Create Supplier</button>
                </form>
            </div>
  )
}

export default CreateSupplier