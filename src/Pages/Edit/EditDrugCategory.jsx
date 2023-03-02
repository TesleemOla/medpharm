import React, { useEffect, useState} from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { GrClose } from "react-icons/gr"
import { baseurl } from '../../Components/utils/baseurl'
import { useAuth } from '../../Components/ProtectDashboard/AuthDash'
import "../../Components/styles/Dashboard/manufacturer/manufacturer.scss"

const EditDrugCategory = () => {
const user = useAuth()
    const [newCategory, setNewCategory] = useState({
        clientId: user.clientId? user.clientId: null
    })
    const [dataItem, setDataItem] = useState()
    const {id} = useParams()
    useEffect(()=>{
        const config={
            method: "GET",
            url: `${baseurl}/api/drugcategories/${id}`,
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        axios(config)
        .then(res=> setDataItem(res.data.data))
    })
    
    function handleEdit(e){
    e.preventDefault()
    const config = {
        method: "PUT",
        url: user.clientId && `${baseurl}/api/drugcategories/${id}`,
        headers: {
            Authorization: `Bearer ${user.token}`
        },
        data: newCategory
    }
    if(!newCategory.clientId){
        toast("You are not authorized to edit a newCategory")
    }
    else if(!newCategory.name || !newCategory.description || 
        !newCategory.phoneNumber){
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
                <p>Edit newCategory</p>
                <GrClose onClick={()=> navigate("/")}/>          
            </div>
            
                <div className="input-grid">
                   
                        
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder={dataItem.name}
                             onChange={(e)=> setNewCategory({...newCategory, name: e.target.value })}/>
                        </div>
               
                   
                        
                        <div>
                            <label>Description</label>
                            <input type="text" placeholder={dataItem.description}
                              onChange={(e)=> setNewCategory({...newCategory, description: e.target.value })}/>
                        </div>
                
               
                   
                  

                </div>
                        <button className="manuf-btn"
                        onClick={(e)=> handleEdit(e) }> Edit newCategory</button>
               
                </form>
    </div>
  )
  }
export default EditDrugCategory