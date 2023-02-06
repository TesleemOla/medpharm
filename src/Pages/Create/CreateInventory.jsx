import React, {useState} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { GrClose } from "react-icons/gr"
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../Components/ProtectDashboard/AuthDash"
import "../../Components/styles/Dashboard/Inventory/createinv.scss"
import { useEffect } from "react";
import { baseurl } from "../../Components/utils/baseurl";

const CreateInventory=()=>{
    const user = useAuth()
    const navigate = useNavigate()
    const [suppliers, setSuppliers] = useState([])
    const [manufacturers, setManufacturers] = useState([])
    const [error, setError] = useState()
    const success =()=>toast("New Inventory successfully created")
    
    function handleSubmit(e){
        e.preventDefault()
             if(!formvalues.batchNumber){
            setError("Please enter batch number")
        }else if(!formvalues.drugId){
            setError("Please enter Drug I.D")
        }else if(!formvalues.drugName){
            setError("Please enter drug name")
        } else if(!formvalues.supplierId){
            setError("Please enter supplier ID")
        } else if(!formvalues.manufacturerId){
            setError("please enter manufacturer ID")
        }else if(!formvalues.manufacturedDate){
            setError("Please enter date of manufacture")
        } else if(!formvalues.expiryDate){
            setError("Please enter date of expiry")
         }else{
            setError(null)
         }
            if(!error){
            const config={
                method: "POST",
                url: `${baseurl}/api/inventories`,
                data: formvalues,
                headers:{
                    Authorization: `Bearer ${user.token}`
                }
            }
            axios(config)
            .then(res=>{
                success()
            })
            .catch(err=> setError(err.response.data.message))
         }
    }
    const [formvalues, setFormValues] = useState({
        batchNumber:"",
        createdAt:new Date(),
        clientId:user.Id,
        drugId:"",
        drugName:"",
        expiryDate:"",
        manufacturedDate:"",
        manufacturerId:"",
        quantityStock:1,
        supplierId:"",
})

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
    return(
        <div className="center-dash">
        <ToastContainer/>
        <form className="cinv-form">
            <p className="error">{error}</p>
             <div  className="light-back">
                <p>Create Inventory</p>
                <GrClose onClick={()=> navigate("/dashboard/inventory")}/>          
            </div>
            <div className="flex-col">
                <div>
                    <div className="input-div">
                        <label>Name</label>
                        <div>
                            <input type="text"  onChange={(e)=> setFormValues({...formvalues, drugName: e.target.value })}/>
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Batch Number</label>
                        <div>
                            <input type="text"   onChange={(e)=> setFormValues({...formvalues, batchNumber: e.target.value })}/>
                        </div>
                    </div>
                
                    
                    <div className="input-div">
                        <label>Supplied By</label>
                        <select onChange={(e)=> setFormValues({...formvalues, supplierId: e.target.value})}>
                            <option default>SELECT A SUPPLIER</option>
                            {suppliers.map((item)=><option
                            key={item.id} value={item.id}>{item.name}</option>)}
                        </select>
                    </div>
                    <div className="input-div">
                        <label>Manufactured By</label>
                        <select onChange={(e)=> setFormValues({...formvalues, manufacturerId: e.target.value})}>
                            <option default>SELECT A MANUFACTURER</option>
                            {manufacturers.map((item)=><option
                            key={item.id} value={item.id}>{item.name}</option>)}
                        </select>
                    </div>
                </div>
                <div>
                    <div className="input-div">
                    <label>Product I.D</label>
                    <div>
                        <input type="text"    onChange={(e)=> setFormValues({...formvalues, drugId: e.target.value })}/>
                    </div>
                    </div>
                    <div className="input-div">
                        <label>Quantity Stock</label>
                        <div>
                            <input type="text"  placeholder={formvalues.quantityStock}
                             onChange={(e)=> setFormValues({...formvalues, quantityStock: e.target.value })}/>
                            
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Date Manufactured</label>
                        <div>
                            <input type="date"   onChange={(e)=> setFormValues({...formvalues, 
                                manufacturedDate: e.target.value })}/>
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Expiry Date</label>
                        <div>
                            <input type="date"  onChange={(e)=> setFormValues({...formvalues, expiryDate: e.target.value })}/>
                        </div>
                    </div>
                    
                    
                </div>
              </div>
             
                <div className="buttons">
                    <button className="btn-cancel">Cancel</button>
                    <button className="btn-save"
                    onClick={(e)=>{handleSubmit(e)}}>Create</button>
                </div>
        </form>
        </div>
    )
}

export default CreateInventory;