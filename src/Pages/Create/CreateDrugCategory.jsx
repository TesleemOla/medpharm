import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { GrClose } from "react-icons/gr"
import { baseurl } from '../../Components/utils/baseurl'
import { useAuth } from '../../Components/ProtectDashboard/AuthDash'
import "../../Components/styles/Dashboard/manufacturer/manufacturer.scss"


const CreateDrugCategory = () => {
    const user = useAuth()
    
    const navigate = useNavigate()
    const [drugCategory, setDrugCategory] = useState({
        name: "",
        description: "",
        clientId: user.clientId? user.clientId: null

    })

    function handleCreate(e){
    e.preventDefault()
    const config = {
        method: "POST",
        url: `${baseurl}/api/drugscategories`,
        headers: {
            Authorization: `Bearer ${user.token}`
        },
        data: drugCategory
    }
     if(!drugCategory.name || !drugCategory.description){
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
                <p>Create drug Type</p>
                <GrClose onClick={()=> navigate("/")}/>          
            </div>
            
                <div className="input-flex">
        
                        
                        <div>
                            <label>Name</label>
                            <input type="text"  onChange={(e)=> setDrugCategory({...drugCategory, name: e.target.value })}/>
                        </div>
    
                        <div>
                            <label>Description</label>
                            <input type="text"   onChange={(e)=> setDrugCategory({...drugCategory, description: e.target.value })}/>
                        </div>        
                        
               
                </div>
                 <button className="manuf-btn"
                 onClick={(e)=> handleCreate(e)}> Create drugCategory</button>
                </form>
            </div>
  )
}

export default CreateDrugCategory