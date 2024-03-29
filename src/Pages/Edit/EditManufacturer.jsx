import React, { useState, useEffect } from 'react'
import { ToastContainer, toast} from "react-toastify"
import { GrClose } from 'react-icons/gr'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../Components/ProtectDashboard/AuthDash'
import "../../Components/styles/Dashboard/manufacturer/manufacturer.scss"
import axios from 'axios'
import { baseurl } from '../../Components/utils/baseurl'

const EditManufacturer = () => {
    const user = useAuth()
    const {id} = useParams()
    const [manufacturer, setManufacturer] = useState({
  name: "",
  address: "",
  phoneNumber: "",
  clientId: user.clientId? user.clientId: null
})
const [ dataItem, setDataItem] = useState({})
 useEffect(()=>{
    const config = {
        method: "GET",
        url: `${baseurl}/api/manufacturers/${id}`,
        headers: {
            Authorization: `Bearer ${user.token}`
        }
 }
 axios(config)
 .then(res=> setDataItem(res.data.data))
 .catch(err=> console.log(err))
}
 ,[user, id ])
function handleEdit(e){
    e.preventDefault()
    const config = {
        method: "PUT",
        url: user.clientId && `${baseurl}/api/manufacturers/${id}`,
        headers: {
            Authorization: `Bearer ${user.token}`
        },
        data: manufacturer
    }
   if(!manufacturer.name && !manufacturer.address && 
        !manufacturer.phoneNumber){
            toast("All values remain the same")
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
                <p>Edit Manufacturer</p>
                <GrClose onClick={()=> navigate("/dashboard/manufacturers")}/>          
            </div>
            
                <div className="input-flex">
                   
                        
                        <div>
                            <label>Name</label>
                            <input type="text" defaultValue={dataItem.name}
                             onChange={(e)=> setManufacturer({...manufacturer, name: e.target.value })}/>
                        </div>
               
                   
                        
                        <div>
                            <label>Address</label>
                            <input type="text" defaultValue={dataItem.address}
                              onChange={(e)=> setManufacturer({...manufacturer, address: e.target.value })}/>
                        </div>
                 
                   
                        
                        <div>
                            <label>Phone Number</label>
                            <input type="text" defaultValue={dataItem.phoneNumber}
                              onChange={(e)=> setManufacturer({...manufacturer, phoneNumber: e.target.value })}/>
                        </div>
             
                </div>
                        <button className="manuf-btn"
                        onClick={(e)=> handleEdit(e) }> Edit Manufacturer</button>
               
                </form>
    </div>
  )
}

export default EditManufacturer