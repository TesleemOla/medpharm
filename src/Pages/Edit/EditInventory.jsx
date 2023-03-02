import React, {useEffect, useState} from 'react'
import { useAuth } from "../../Components/ProtectDashboard/AuthDash"
import { useParams, useNavigate }  from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
import { MdEdit } from "react-icons/md"
import { TbArrowNarrowLeft} from "react-icons/tb"
import axios from 'axios'
import { baseurl } from '../../Components/utils/baseurl'
import  "../../Components/styles/Dashboard/Inventory/editinv.scss"

const EditInventory = () => {
    const {id} = useParams()
    const user = useAuth()
    const navigate = useNavigate()
    const [inventoryItem, setInventoryItem] = useState({})
    const [manufacturers, setManufacturers] = useState([])
    const [suppliers, setSuppliers] = useState([])
    const [edit, setEdit] = useState(false)
   
    useEffect(()=>{
        const config = {
            method: "GET",
            url: `${baseurl}/api/inventories/${id}`,
            headers:{
                Authorization: `Bearer ${user.token}`,
            }
        }
        axios(config)
        .then(res=> setInventoryItem(res.data.data))
    },[user, id, inventoryItem])
    useEffect(()=>{
    const config={
        method: "GET",
        url: `${baseurl}/api/manufacturers`,
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }
    axios(config)
    .then(res=> setManufacturers(res.data.data))
},[user])
useEffect(()=>{
    const config={
        method: "GET",
        url: `${baseurl}/api/suppliers`,
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }
    axios(config)
    .then(res=> setSuppliers(res.data.data) )
},[user])

    

function handleEdit(e){
    e.preventDefault()
    if(updateItem.batchNumber || updateItem.drugId || updateItem.supplierId || updateItem.manufacturerId
        || updateItem.manufacturedDate || updateItem.expiryDate || updateItem.quantityStock){
            const config={
                method: 'PUT',
                url: `${baseurl}/api/inventories/${id}`,
                headers:{
                    Authorization: `Bearer ${user.token}`
                },
                data: updateItem
            }
          
            axios(config)
            .then(res=> console.log(res))
            .catch(err=> {
                console.log(err)
                toast(err.response.data.message)})
                
        }else{
            toast('All values remain the same')
        }
}
 const [updateItem, setUpdateItem] = useState({})
  return (
    <div className="editInventory">
        <ToastContainer/>
        <div className="back-div">
            <TbArrowNarrowLeft onClick={()=> navigate(-1)}/>
            Back
        </div>
        
        <form className="inv-form">
            <div  className="light-back">
                <p>{inventoryItem.drugName}</p>
                <p onClick={()=> setEdit(true)}> Edit <MdEdit /></p>
                
            </div>
            <div className="flex-col">
                <div>
                    
                    <div className="input-div">
                        <label>Quantity Stock</label>
                        <div>
                            <input type="number" placeholder={inventoryItem.quantityStock}
                            onChange={(e)=> setUpdateItem({...updateItem, quantityStock: e.target.value})}
                            readOnly={!edit}/>
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Manufactured by</label>
                        <select onChange={(e)=> setUpdateItem({...updateItem, manufacturerId: e.target.value})}>
                            {
                                manufacturers.filter(({id})=> id ===inventoryItem.manufacturerId)
                                .map(({name, id})=> <option key={id} value={id} default>{name}</option>)
                            }
                            {
                                manufacturers.filter(({id})=> id !==inventoryItem.manufacturerId)
                                .map(({name,id})=>{
                                    return <option key={id} value={id}>{name}</option>
                                })
                            }
                        </select>
                    </div>
                    
                    <div className="input-div">
                        <label>Supplied By</label>
                        <select onChange={(e)=> setUpdateItem({...updateItem, supplierId: e.target.value})}>
                             {
                                suppliers.filter(({id})=> id ===inventoryItem.supplierId)
                                .map(({name, id})=> <option key={id} value={id} default>{name}</option>)
                            }
                            {
                                suppliers.filter(({id})=> id !==inventoryItem.supplierId)
                                .map(({name,id})=>{
                                    return <option key={id} value={id}>{name}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div>
                    <div className="input-div">
                    <label>Batch Number</label>
                    <div>
                        <input type="text" placeholder={inventoryItem.batchNumber}
                        onChange={(e)=> setUpdateItem({...updateItem, batchNumber: e.target.value})}  
                        readOnly={!edit}/>
                    </div>
                    </div>
                    <div className="input-div">
                        <label>Drug I.D</label>
                        <div>
                            <input type="text" placeholder={inventoryItem.drugId}
                            onChange={(e)=> setUpdateItem({...updateItem, drugId: e.target.value})}
                            readOnly={!edit}/>
                            
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Expiry Date</label>
                        <div>
                            <input type="date" placeholder={inventoryItem?.expiryDate}
                            onChange={(e)=> setUpdateItem({...updateItem, expiryDate: toString(e.target.value)})}
                            readOnly={!edit}/>
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Date Manufactured</label>
                        <div>
                            <input type="date" placeholder={inventoryItem?.manufacturedDate} 
                            onChange={(e)=> setUpdateItem({...updateItem, manufacturedDate: toString(e.target.value)})}
                            readOnly={!edit}/>
                        </div>
                    </div>
                    
                    
                </div>
              </div>
              
                {edit && <div className="buttons">
                    <button className="btn-cancel"
                    onClick={()=>navigate("/dashboard/Inventory")}>Cancel</button>
                    <button className="btn-save"
                    onClick={(e)=> handleEdit(e)}>Save</button>
                </div>}
        </form>
    </div>
  )
}

export default EditInventory