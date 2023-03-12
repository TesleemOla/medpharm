import React, {useState } from 'react'
import axios from 'axios'
import { GrClose } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { useAuth } from '../../Components/ProtectDashboard/AuthDash'
import "../../Components/styles/Dashboard/manufacturer/manufacturer.scss"
import { baseurl } from '../../Components/utils/baseurl'


const CreateCustomer = () => {
     const user = useAuth()
     const CType = ["HOSPITAL", "PHARMACY", "OTHER"]
    const navigate = useNavigate()
    const [newCustomer, setNewCustomer] = useState({})

    function handleCreate(e){
        e.preventDefault()
        if(!newCustomer.companyName || !newCustomer.contactEmailAddress || !newCustomer.contactPhoneNumber
             || !newCustomer.officeAddress || !newCustomer.city || !newCustomer.state || !newCustomer.adminUser.emailAddress
             || !newCustomer.adminUser.firstName || !newCustomer.adminUser.lastName || 
             !newCustomer.adminUser.phoneNumber){
                toast(`Please fill all required fields`)
                return
             }else{
                const config={
                    method: 'POST',
                    url: `${baseurl}/api/clients/register`,
                    headers: {
                        Authorization: `bearer ${user.token}`
                    },
                    data: newCustomer
                }
                axios(config)
                .then(res=> console.log(res))
                .catch(err=> console.error(err))
             }
    }
 return (
     <div>
        <ToastContainer/>
        <form className="manuf-form">

             <div  className="light-back">
                <p>Create Customer</p>
                <GrClose onClick={()=> navigate("/")}/>          
            </div>
            
                <div className="input-grid">
                        <div>
                            <label>Customer Type</label>
                            <select>
                                <option>Please select a customer Type</option>
                                {
                                    CType.map((item,i)=> <option key={i}>{item}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            <label>Company Name</label>
                            <input type="text"  onChange={(e)=> setNewCustomer({...newCustomer, companyName: e.target.value })}/>
                        </div>
    
                        <div>
                            <label>Email Address</label>
                            <input type="text"   onChange={(e)=> setNewCustomer({...newCustomer, contactEmailAddress: e.target.value })}/>
                        </div>        
                        <div>
                            <label>Phone Number</label>
                            <input type="text"   onChange={(e)=> setNewCustomer({...newCustomer, contactPhoneNumber: e.target.value })}/>
                        </div>   
                        <div>
                            <label>Office Address</label>
                            <input type="text"   onChange={(e)=> setNewCustomer({...newCustomer, officeAddress: e.target.value })}/>
                        </div>
                        <div>
                            <label>City</label>
                            <input type="text"   onChange={(e)=> setNewCustomer({...newCustomer, city: e.target.value })}/>
                        </div>      
                        <div>
                            <label>State</label>
                            <input type="text"   onChange={(e)=> setNewCustomer({...newCustomer, state: e.target.value })}/>
                        </div>
                           
                </div>
                <h3>Admin User</h3>
                <div className="input-grid">
                    <div>
                        <label>User Email</label>
                        <input type="text"   onChange={(e)=> setNewCustomer({...newCustomer, adminUser:{
                            ...newCustomer.adminUser, emailAddress: e.target.value
                        } })}/>
                    </div>
                    <div>
                        <label>First Name</label>
                        <input type="text"   onChange={(e)=> setNewCustomer({...newCustomer, adminUser:{
                            ...newCustomer.adminUser, firstName: e.target.value
                        } })}/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text"   onChange={(e)=> setNewCustomer({...newCustomer, adminUser:{
                            ...newCustomer.adminUser, lastName: e.target.value
                        } })}/>
                    </div>
                    <div>
                        <label>Other Name</label>
                        <input type="text"   onChange={(e)=> setNewCustomer({...newCustomer, adminUser:{
                            ...newCustomer.adminUser, lastName: e.target.value
                        } })}/>
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input type="text"   onChange={(e)=> setNewCustomer({...newCustomer, adminUser:{
                            ...newCustomer.adminUser, phoneNumber: e.target.value
                        } })}/>
                    </div>
                    <div>
                        <label>Profile Picture</label>
                        <input type="file" accept='image/*'   onChange={(e)=>{
                    let reader = new FileReader()
                    reader.readAsDataURL(e.target.files[0])
                    reader.onload=(e)=>{
                  setNewCustomer({ ...newCustomer,
                  adminUser: {...newCustomer.adminUser, imageUrl: e.target.result}})}
                  }
                  }/>
                    </div>
                </div>
                <div>
                        <label>Referral Code</label>
                        <input type="text"   onChange={(e)=> setNewCustomer({...newCustomer, adminUser:{
                            ...newCustomer.adminUser, referredReferralCode: e.target.value
                        } })}/>
                    </div>
                 <button className="manuf-btn"
                 onClick={(e)=> handleCreate(e)}> Create newCustomer</button>
                </form>
            </div>
  )
}


export default CreateCustomer