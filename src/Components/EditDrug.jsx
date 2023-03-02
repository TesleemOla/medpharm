import React,{ useEffect, useState }  from 'react'
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { TbArrowNarrowLeft } from 'react-icons/tb';
import { MdEdit } from 'react-icons/md';
import { useAuth } from './ProtectDashboard/AuthDash'
import { baseurl } from './utils/baseurl'
import  "./styles/Dashboard/Inventory/editinv.scss"

const EditDrug = () => {
    const [drugData, setDrugData] = useState({})
    const [categories, setCategories] = useState([])
    const [defaultCategory, setDefaultCategory] = useState({})
    const [edit, setEdit] = useState(false)
    const [error, setError] = useState()
    const success=()=> toast(`Drug Edited successfully`)
    const {id} = useParams()
  
    const  user  = useAuth()
    const navigate = useNavigate()
    useEffect(()=> {
        const config = {
            method: "GET",
            url: `${baseurl}/api/drugs/${id}`,
            headers:{
                Authorization: `Bearer ${user.token}`
            }
        }
            axios(config)
            .then(res=>  setDrugData(res.data.data))
          
        }
        
    ,[id, user,drugData])
        useEffect(()=>{
            const config = {
                method: 'GET',
                url: `${baseurl}/api/drugscategories`,
                headers:{
                    Authorization: `Bearer ${user.token}`
                }
            }
            axios(config)
            .then(res=> {
                setCategories(res.data.data)})
        },[user])

        useEffect(()=>{
            
            const config = {
                method: 'GET',
                url: `${baseurl}/api/drugscategories/${drugData.categoryId}`,
                headers:{
                    Authorization: `Bearer ${user.token}`
                }
            }
            if(drugData.categoryId){
            axios(config)
            .then(res=> {
                setDefaultCategory(res.data.data)})
            }
        },[user, drugData])
        function handleSubmit(e){
            e.preventDefault();
            setDrugData({...drugData,
                 updatedAt: Date.now(),
                updatedBy: user.name})
            const config={
                method: "PUT",
                url: `${baseurl}/api/drugs/${id}`,
                headers:{
                    Authorization: `Bearer ${user.token}`
                },
                data: drugData

            }
            axios(config)
            .then(res=> {
                console.log(res)
                setError(null)
                success()
                navigate(-1)
            })
            .catch(err=> setError(err.response.data.message))
        }
  return (
   <div className="editInventory">
        <div className="back-div">
            <TbArrowNarrowLeft onClick={()=> navigate(-1)}/>
            Back
        </div>
        
        <form className="inv-form">
            <ToastContainer />
            <p className="errors">{error}</p>
            <div  className="light-back">
                <p>{drugData.drugName}</p>
                <p onClick={()=> setEdit(true)}>Edit<MdEdit/></p>
                
            </div>
            <div className="flex-col">
                <div>
                    <div className="input-div">
                        <label>Product I.D</label>
                        <div>
                            <input type="text" defaultValue={drugData.productId}
                            readOnly={!edit}  onChange={(e)=> setDrugData({...drugData, productId: e.target.value})}/>
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Category</label>
                        <select onChange={(e)=>setDrugData({...drugData, categoryId: e.target.value})}>
                            <option value={defaultCategory.id} default>{defaultCategory.name}</option>
                            {
                                categories.filter(item=> item.id !== defaultCategory.id)
                                .map(item=> <option value={item.id} key={item.id}>{item.name}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="input-div">
                        <label>Purpose</label>
                        <div>
                            <input type="text" defaultValue={drugData.treatmentUsedFor}
                            readOnly={!edit} onChange={(e)=> setDrugData({...drugData, treatmentUsedFor: e.target.value})}/>
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Quantity</label>
                        <div>
                            <input type="text" readOnly={!edit} defaultValue={drugData.noInPackage}
                            onChange={(e)=> setDrugData({...drugData, noInPackage: Number(e.target.value)})}/>
                        </div>
                    </div>
                    
                    <div className="input-div">
                        <label>Scientific Name</label>
                        <div>
                            <input type="text" defaultValue={drugData.scientificName}
                            readOnly={!edit} onChange={(e)=> setDrugData({...drugData, scientificName: e.target.value})}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="input-div">
                    <label>Reorder Level</label>
                    <div>
                        <input type="text" defaultValue={drugData.reOrderLevel}  
                        readOnly={!edit} onChange={(e)=> setDrugData({...drugData, reOrderLevel: e.target.value})}/>
                    </div>
                    </div>
                    <div className="input-div">
                        <label>Total Stock</label>
                        <div>
                            <input type="text" defaultValue={drugData.totalStocked}
                            readOnly={!edit} onChange={(e)=> setDrugData({...drugData, totalStocked: Number(e.target.value)})}/>
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Out of Stock</label>
                        <div>
                            <input type="text" defaultValue={drugData.totalOutOfStock}
                            readOnly={!edit} onChange={(e)=> setDrugData({...drugData, totalOutOfStock: Number(e.target.value)})} />
                            
                        </div>
                    </div>
                    
                    <div className="input-div">
                        <label>Date Manufactured</label>
                        <div>
                            <input type="text" defaultValue={drugData.manufacturedDate} 
                            readOnly={!edit} onChange={(e)=> setDrugData({...drugData, manufacturedDate: e.target.value})}/>
                        </div>
                    </div>
                    
                    <div className="input-div">
                        <label>Status</label>
                       
                        <select onChange={(e)=> setDrugData({...drugData, status: e.target.value})}>
                            <option value="AVAILABLE" default={drugData.status === "AVAILABLE"}>Available</option>
                            <option value="ACTIVE" default={drugData.status === "ACTIVE"}>Active</option>
                            <option value="NOT AVAILABLE" default={drugData.status === "NOT AVAILABLE"}>Not Available</option>
                        </select>
                        
                    </div>
                </div>
              </div>
              
                {edit && <div className="buttons">
                    <button className="btn-cancel"
                    onClick={(e)=>{
                        e.preventDefault();
                        navigate(-1)
                    }}>Cancel</button>
                    <button className="btn-save"
                    onClick={(e)=> handleSubmit(e)}>Save</button>
                </div>}
        </form>
    </div>
  )
}

export default EditDrug