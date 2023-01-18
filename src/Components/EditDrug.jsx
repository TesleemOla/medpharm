import React,{ useEffect, useState }  from 'react'
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom'
import { TbArrowNarrowLeft } from 'react-icons/tb';
import { MdEdit } from 'react-icons/md';
import { useAuth } from './ProtectDashboard/AuthDash'
import  "./styles/Dashboard/Inventory/editinv.scss"

const EditDrug = () => {
    const [drugData, setDrugData] = useState({})
    const [edit, setEdit] = useState(false)
    const {id} = useParams()
    const  user  = useAuth()
    const navigate = useNavigate()
    useEffect(()=> {
        const config = {
            method: "GET",
            url: `https://medipharm-test.herokuapp.com/api/drugs/${id}`,
            Authorization:{
                headers: `Bearer ${user.token}`
            }
        }
            axios(config)
            .then(res=> setDrugData(res.data.data))
            console.log(drugData)
            console.log(user)
        }
        
    ,[id, user,drugData])

//   "drugDescription": "string",
  return (
   <div className="editInventory">
        <div className="back-div">
            <TbArrowNarrowLeft onClick={()=> navigate("/dashboard/Drugs")}/>
            Back
        </div>
        
        <form className="inv-form">
            <div  className="light-back">
                <p>{drugData.drugName}</p>
                <MdEdit onClick={()=> setEdit(true)}/>
                
            </div>
            <div className="flex-col">
                <div>
                    <div className="input-div">
                        <label>Product I.D</label>
                        <div>
                            <input type="text" value={drugData.productId}
                            readOnly={!edit} />
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Category I.D</label>
                        <div>
                            <input type="text" value={drugData.categoryId}
                            readOnly={!edit}/>
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Purpose</label>
                        <div>
                            <input type="text" value={drugData.treatmentFor}
                            readOnly={!edit}/>
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Quantity</label>
                        <div>
                            <input type="text" readOnly={!edit} value={drugData.noInPackage}/>
                        </div>
                    </div>
                    
                    <div className="input-div">
                        <label>Scientific Name</label>
                        <div>
                            <input type="text" value={drugData.scientificName}
                            readOnly={!edit}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="input-div">
                    <label>Reorder</label>
                    <div>
                        <input type="text" value={drugData.reOrderLevel}  
                        readOnly={!edit}/>
                    </div>
                    </div>
                    <div className="input-div">
                        <label>Quantity Remaining</label>
                        <div>
                            <input type="text" value={drugData.quantityLeft }
                            readOnly={!edit}/>
                            
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Package Type</label>
                        <div>
                            <input type="text" value={drugData.packageType}
                            readOnly={!edit}/>
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Date Manufactured</label>
                        <div>
                            <input type="text" value={drugData.manufacturedDate} 
                            readOnly={!edit}/>
                        </div>
                    </div>
                    
                    <div className="input-div">
                        <label>Status</label>
                        <div>
                        <select>
                            <option value="Available">Available</option>
                            <option value="Active">Active</option>
                            <option value="NotAvailable">Not Available</option>
                        </select>
                        </div>
                    </div>
                </div>
              </div>
              <div className="select-div">
                        
                </div>
                {edit && <div className="buttons">
                    <button className="btn-cancel">Cancel</button>
                    <button className="btn-save">Save</button>
                </div>}
        </form>
    </div>
  )
}

export default EditDrug