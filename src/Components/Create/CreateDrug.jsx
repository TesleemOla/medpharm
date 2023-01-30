import React, { useState, useEffect } from 'react'
import {ToastContainer, toast} from "react-toastify"
import { useAuth } from "../ProtectDashboard/AuthDash"
import { useNavigate }  from "react-router-dom"
import { TbArrowNarrowLeft} from "react-icons/tb"
import axios from 'axios'
import { baseurl } from '../utils/baseurl'
import  "../styles/Dashboard/Inventory/createinv.scss"


const CreateDrug = () => {
    const navigate = useNavigate()
    const user = useAuth()
    const success=()=> toast("New Drug successfully Added")
    const [categories, setCategories] = useState([])
    const [error, setError] = useState()
    const [formvalues, setFormvalues] = useState({
          categoryId: "",
            productId: "",
            drugName: "",
            scientificName: "",
            reOrderLevel: 0,
            drugDescription: "",
            treatmentUsedFor: "",
            packageType: "VIAL",
            noInPackage: 1
    })
     useEffect(()=>{
        const config={
            method: "GET",
            url: `${baseurl}/api/drugscategories`,
            headers:{
                Authorization: `Bearer ${user.token}`
            }
        }
        axios(config)
        .then(res=> setCategories(res.data.data))
     },[user])

    //  handleSubmit function
     function handleSubmit(e){
        e.preventDefault();
     
        if(!formvalues.drugName){
            setError("Please enter a drug name")
        }else if(!formvalues.categoryId){
            setError("Please enter a category Id")
        }else if(!formvalues.drugDescription){
            setError("Please enter a drug description")
        }else {
            setError(null)
        }
        if(!error){
            const config={
                method: "POST",
                url: `${baseurl}/api/drugs`,
                data: formvalues,
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }
            axios(config)
            .then(res=> {
                console.log(res)
                success()})
                .catch(err=> setError(err.response.data.message))
        }
     }
  return (
    <div className="center-dash">
        <ToastContainer />
        <div className="back-div">
            <TbArrowNarrowLeft onClick={()=> navigate(-1)}/>
            Back
        </div>
        
        <form className="cinv-form">
            <p className="errors">{error}</p>
            <div  className="light-back">
                <p>Add Drug</p>              
            </div>
            <div className="flex-col">
                <div>
                    <div className="input-div">
                        <label>Name</label>
                        <div>
                            <input type="text"  onChange={(e)=> setFormvalues({...formvalues, drugName: e.target.value})}/>
                        </div>
                    </div>
                    
                    <div className="input-div">
                        <label>Category</label>
                        <div>
                            <select onChange={(e)=> setFormvalues({...formvalues, categoryId: e.target.value})}>
                                <option>Please select a category</option>
                                { categories.map((item)=>
                                 <option key={item.id} value={item.id}>{item.name}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Reorder Level</label>
                        <div>
                            <input type="text" onChange={(e)=> setFormvalues({...formvalues, reOrderLevel: e.target.value})}/>
                        </div>
                    </div>
                    
                    
                    <div className="input-div">
                        <label>Drug Description</label>
                        <div>
                            <input type="text" onChange={(e)=> setFormvalues({...formvalues, drugDescription: e.target.value})}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="input-div">
                        <label>Scientific Name</label>
                        <div>
                            <input type="text" onChange={(e)=> setFormvalues({...formvalues, scientificName: e.target.value})}/>
                        </div>
                    </div>
                    <div className="input-div">
                    <label>Treatment for</label>
                    <div>
                        <input type="text" onChange={(e)=> setFormvalues({...formvalues, treatmentUsedFor: e.target.value})}/>
                    </div>
                    </div>
                    <div className="input-div">
                        <label>Product I.D</label>
                        <div>
                            <input type="text" onChange={(e)=> setFormvalues({...formvalues, productId: e.target.value})}/>
                            
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Package Type</label>
                        <div>
                            <input type="text" onChange={(e)=> setFormvalues({...formvalues, packageType: e.target.value})}
                            defaultValue={formvalues.packageType}/>
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Pack size</label>
                        <div>
                            <input type="text" onChange={(e)=> setFormvalues({...formvalues, noInPackage: e.target.value})}/>
                        </div>
                    </div>
                </div>
              </div>
        
                <div className="buttons">
                    <button className="btn-cancel">Cancel</button>
                    <button className="btn-save"
                    onClick={(e)=>handleSubmit(e)}>Add Drug</button>
                </div>
        </form>
    </div>
  )
}

export default CreateDrug