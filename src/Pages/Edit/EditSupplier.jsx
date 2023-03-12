import React, { useState, useEffect } from 'react'
import { useAuth } from "../../Components/ProtectDashboard/AuthDash"
import { ToastContainer, toast } from "react-toastify"
import { GrClose } from 'react-icons/gr'
import { useParams, useNavigate } from "react-router-dom"
import { baseurl } from '../../Components/utils/baseurl'
import "../../Components/styles/Dashboard/manufacturer/manufacturer.scss"
import axios from 'axios'

const EditSupplier = () => {
    const user = useAuth()
    
    const [supplier, setSupplier] = useState({
        
    })
    const {id} = useParams()
    useEffect(()=>{
        const config={
            method: "GET",
            url: `${baseurl}/api/suppliers/${id}`,
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        axios(config)
        .then(res=> setSupplier(res.data.data))
    })
    // console.log(Supplier)
    function handleEdit(e){
        setSupplier({...supplier,
        clientId: user.clientId? user.clientId: null })
    e.preventDefault()
    const config = {
        method: "PUT",
        url: user.clientId && `${baseurl}/api/suppliers/${id}`,
        headers: {
            Authorization: `Bearer ${user.token}`
        },
        data: supplier
    }
    if(!supplier.clientId){
        toast("You are not authorized to edit a supplier")
    }
    else if(!supplier.name || !supplier.address || 
        !supplier.phoneNumber){
            toast("Please fill all fields")
        }else{
            
    axios(config)
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
        }
}
    const navigate = useNavigate()
  return (
    <div className="center-dash">
        <ToastContainer/>
        <form className="manuf-form">
             <div  className="light-back">
                <p>Edit supplier</p>
                <GrClose onClick={()=> navigate("/dashboard/suppliers")}/>          
            </div>
            
                <div className="input-grid">
                   
                        
                        <div>
                            <label>Name</label>
                            <input type="text" defaultValue={supplier.name}
                             onChange={(e)=> setSupplier({...supplier, name: e.target.value })}/>
                        </div>
               
                   
                        
                        <div>
                            <label>Address</label>
                            <input type="text" defaultValue={supplier.address}
                              onChange={(e)=> setSupplier({...supplier, address: e.target.value })}/>
                        </div>
                 
                   
                        
                        <div>
                            <label>Phone Number</label>
                            <input type="text" defaultValue={supplier.phoneNumber}
                              onChange={(e)=> setSupplier({...supplier, phoneNumber: e.target.value })}/>
                        </div>
               
                   
                        
                </div>
                        <button className="manuf-btn"
                        onClick={(e)=> handleEdit(e) }> Edit supplier</button>
               
                </form>
    </div>
  )
}

export default EditSupplier