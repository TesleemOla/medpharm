import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { GrClose } from "react-icons/gr"
import { useAuth } from "./ProtectDashboard/AuthDash"
import "./styles/Dashboard/Inventory/editinv.scss"

const CreateInventory=()=>{
    const user = useAuth()
    // console.log(user)
    const Navigate = useNavigate()
    const [formvalues, setFormValues] = useState({
  batchNumber: "string",
  drugId: "string",
  supplierId: "string",
  manufacturerId: "string",
  manufacturedDate: "string",
  expiryDate: "string",
  quantityStock: 1,
  clientId: user.id
})
    return(
        <div className="AddInventory center-dash">
        
        <form className="inv-form">
             <div  className="light-back">
                <p>Create Inventory</p>
                <GrClose onClick={()=> Navigate("/dashboard/inventory")}/>          
            </div>
            <div className="flex-col">
                <div>
                    <div className="input-div">
                        <label>Name</label>
                        <div>
                            <input type="text"  />
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Category</label>
                        <div>
                            <input type="text"  />
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Total Quantity</label>
                        <div>
                            <input type="text"  />
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Amount</label>
                        <div>
                            <input type="text" />
                        </div>
                    </div>
                    
                    <div className="input-div">
                        <label>Supplied By</label>
                        <div>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="input-div">
                    <label>Product I.D</label>
                    <div>
                        <input type="text"   />
                    </div>
                    </div>
                    <div className="input-div">
                        <label>Quantity Remaining</label>
                        <div>
                            <input type="text"  />
                            
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Expiry Date</label>
                        <div>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Date Manufactured</label>
                        <div>
                            <input type="text"  />
                        </div>
                    </div>
                    
                    <div className="input-div">
                        <label>Assigned Marketer</label>
                        <div>
                            <input type="text" />
                        </div>
                    </div>
                </div>
              </div>
              <div className="select-div">
                        <label>Status</label>
                        <select>
                            <option value="Available">Available</option>
                            <option value="Active">Active</option>
                        </select>
                </div>
                <div className="buttons">
                    <button className="btn-cancel">Cancel</button>
                    <button className="btn-save">Create</button>
                </div>
        </form>
        </div>
    )
}

export default CreateInventory;