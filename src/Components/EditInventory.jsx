import React, {useEffect, useState} from 'react'
import { useAuth } from "./ProtectDashboard/AuthDash"
import { useParams, useNavigate }  from "react-router-dom"
import { MdEdit } from "react-icons/md"
import { TbArrowNarrowLeft} from "react-icons/tb"
import axios from 'axios'
import  "./styles/Dashboard/Inventory/editinv.scss"

const EditInventory = () => {
    const {id} = useParams()
    const user = useAuth()
    const Navigate = useNavigate()
    const [inventoryItem, setInventoryItem] = useState([])
    const [edit, setEdit] = useState(false)
    useEffect(()=>{
        const config = {
            method: "GET",
            url: `https://medipharm-test.herokuapp.com/api/inventories/${id}`,
            headers:{
                Authorization: `Bearer ${user.token}`,
            }
        }
        axios(config)
        .then(res=> setInventoryItem(res.data.data))
        // console.log(inventoryItem)
    },[user, id])
  return (
    <div className="editInventory">
        <div className="back-div">
            <TbArrowNarrowLeft onClick={()=> Navigate(-1)}/>
            Back
        </div>
        
        <form className="inv-form">
            <div  className="light-back">
                <p>{inventoryItem.drugName}</p>
                <MdEdit onClick={()=> setEdit(true)}/>
                
            </div>
            <div className="flex-col">
                <div>
                    <div className="input-div">
                        <label>Name</label>
                        <div>
                            <input type="text" defaultValue={inventoryItem.drugName}
                            readOnly={!edit} />
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Category</label>
                        <div>
                            <input type="text" defaultValue={inventoryItem.packageType}
                            readOnly={!edit}/>
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Total Quantity</label>
                        <div>
                            <input type="text" defaultValue={inventoryItem.quantityStock}
                            readOnly={!edit}/>
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Amount</label>
                        <div>
                            <input type="text" readOnly={!edit}/>
                        </div>
                    </div>
                    
                    <div className="input-div">
                        <label>Supplied By</label>
                        <div>
                            <input type="text" defaultValue={inventoryItem.supplierName}
                            readOnly={!edit}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="input-div">
                    <label>Product I.D</label>
                    <div>
                        <input type="text" defaultValue={inventoryItem.batchNumber}  
                        readOnly={!edit}/>
                    </div>
                    </div>
                    <div className="input-div">
                        <label>Quantity Remaining</label>
                        <div>
                            <input type="text" defaultValue={inventoryItem.quantityLeft }
                            readOnly={!edit}/>
                            
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Expiry Date</label>
                        <div>
                            <input type="text" defaultValue={inventoryItem.expiryDate}
                            readOnly={!edit}/>
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Date Manufactured</label>
                        <div>
                            <input type="text" defaultValue={inventoryItem.manufacturedDate} 
                            readOnly={!edit}/>
                        </div>
                    </div>
                    
                    <div className="input-div">
                        <label>Assigned Marketer</label>
                        <div>
                            <input type="text" defaultValue={inventoryItem.supplierName}
                            readOnly={!edit}/>
                        </div>
                    </div>
                </div>
              </div>
              <div className="select-div">
                        <label>Status</label>
                        <select>
                            <option defaultValue="Available">Available</option>
                            <option defaultValue="Active">Active</option>
                        </select>
                </div>
                {edit && <div className="buttons">
                    <button className="btn-cancel">Cancel</button>
                    <button className="btn-save">Save</button>
                </div>}
        </form>
    </div>
  )
}

export default EditInventory