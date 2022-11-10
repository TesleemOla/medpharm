import React, {useState} from "react";
import "./styles/CreateInventory/CreateInventory.scss"

const CreateInventory=()=>{
    const [formvalues, setFormValues] = useState({
  batchNumber: "string",
  drugId: "string",
  supplierId: "string",
  manufacturerId: "string",
  manufacturedDate: "string",
  expiryDate: "string",
  quantityStock: 1,
  clientId: "string"
})
    return(
        <section className="inventory center">
            <h2>Create Inventory</h2>
            <form className="form-field">
                <div className="input-grp">
                    <label>Name</label>
                    <div className="input-item">
                        <input type="text"
                        placeholder="Name of Product"
                        value={formvalues.name}
                        onChange={(e)=> setFormValues({ ...formvalues, name: e.target.value})}
                        />
                    </div>
                </div>
                <div className="input-grp">
                    <label>Batch No.</label>
                    <div className="input-item">
                        <input type="text"
                        placeholder="Batch no."
                        value={formvalues.batchNumber}
                        onChange={(e)=> setFormValues({ ...formvalues, batchNumber: e.target.value})}/>
                    </div>
                </div>
                <div className="input-grp">
                    <label>Product I.D</label>
                    <div className="input-item">
                        <input type="text"
                        placeholder="Product I.D"
                        value={formvalues.drugId}
                        onChange={(e)=> setFormValues({ ...formvalues, drugId: e.target.value})}/>
                    </div>
                </div>
                
                <div className="input-grp">
                    <label>Quantity stock</label>
                    <div className="input-item">
                        <input type="string"
                        placeholder="1" 
                        value={formvalues.quantityStock}
                        onChange={(e)=> setFormValues({ ...formvalues, quantityStock: e.target.value})}/>
                    </div>
                </div>
                <div className="input-grp">
                    <label>Date Manufactured</label>
                    <div className="input-item">
                        <input type="text"
                        placeholder="Date Manufactured"
                        value={formvalues.manufacturedDate}
                        onChange={(e)=> setFormValues({ ...formvalues, manufacturedDate: e.target.value})}
                        
                        />
                    </div>
                </div>
                <div className="input-grp">
                    <label>Expiry Date</label>
                    <div className="input-item">
                        <input type="date"
                        placeholder="Expiry date"
                        value={formvalues.expiryDate}
                        onChange={(e)=> setFormValues({ ...formvalues, expiryDate: e.target.value})}/>
                    </div>
                </div>
                <div className="input-grp">
                    <label>Customer I.D</label>
                    <div className="input-item">
                        <input type="text"
                        placeholder="Supplier I.D"
                        value={formvalues.clientId}
                        onChange={(e)=> setFormValues({ ...formvalues, clientId: e.target.value})}/>
                    </div>
                </div>
                <button className="inventory-btn">Create Inventory</button>
            </form>
        </section>
    )
}

export default CreateInventory;