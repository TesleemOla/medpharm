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
    const [suppliers, setSuppliers] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    clientId: user.clientId? user.clientId: null

    })

    function handleCreate(e){
    e.preventDefault()
    const config = {
        method: "POST",
        url: `${baseurl}/api/suppliers`,
        headers: {
            Authorization: `Bearer ${user.token}`
        },
        data: suppliers
    }
  if(!suppliers.name || !suppliers.address || 
        !suppliers.phoneNumber){
            toast("Please fill all fields")
        }else{
            
    axios(config)
    .then(res=> console.log(res))
    .catch(err=> {
        console.log(err)
        toast(err.message)})
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
            
                <div className="input-flex">
        
                        
                        <div>
                            <label>Name</label>
                            <input type="text"  onChange={(e)=> setSuppliers({...suppliers, name: e.target.value })}/>
                        </div>
             
        
                        
                        <div>
                            <label>Address</label>
                            <input type="text"   onChange={(e)=> setSuppliers({...suppliers, address: e.target.value })}/>
                        </div>
             
        
                        
                        <div>
                            <label>Phone Number</label>
                            <input type="text"   onChange={(e)=> setSuppliers({...suppliers, phoneNumber: e.target.value })}/>
                        </div>
             
               
                </div>
                 <button className="manuf-btn"
                 onClick={(e)=> handleCreate(e)}> Create Supplier</button>
                </form>
            </div>
  )
}

export default CreateSupplier