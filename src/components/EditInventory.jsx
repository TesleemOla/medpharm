import React from 'react'
import { TbArrowNarrowLeft} from "react-icons/tb"

const EditInventory = ({inventoryItem}) => {
  return (
    <div>
        <div className="back-div">
            <h2>{inventoryItem.name}</h2>
            <TbArrowNarrowLeft/>

        </div>
        
        <form className="form-field">
            <div>
                <div className="input-div">
                    <label>Name</label>
                    <input type="text"/>
                </div>
                <div className="input-div">
                    <label>Category</label>
                    <input type="text"/>
                </div>
                <div className="input-div">
                    <label>Total Quantity</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Amount</label>
                    <input type="text"/>
                </div>
                <div className="input-div">
                    <label>Expiry Date</label>
                    <input type="text"/>
                </div>
                <div className="input-div">
                    <label>Supplied By</label>
                    <input type="text"/>
                </div>
            </div>
            <div>
                <div className="input-div">
                <label>Product I.D</label>
                <input type="text"/>
            </div>
            <div className="input-div">
                <label>Treatment for</label>
                <input type="text"/>
            </div>
            <div className="input-div">
                <label>Quantity Remaining</label>
                <input type="text"/>
            </div>
            <div className="input-div">
                <label>Date Manufactured</label>
                <input type="text"/>
            </div>
            <div className="input-div">
                <label>Status</label>
                <input type="text"/>
            </div>
            <div className="input-div">
                <label>Assigned Marketer</label>
                <input type="text"/>
            </div>
            </div>
        </form>
    </div>
  )
}

export default EditInventory