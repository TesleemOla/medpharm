import React, { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import { TbArrowNarrowLeft } from 'react-icons/tb'
import { useParams, useNavigate } from "react-router-dom"
import { baseurl } from '../../Components/utils/baseurl'
import { useAuth } from '../../Components/ProtectDashboard/AuthDash'
import  "../../Components/styles/Dashboard/edituser.scss"


const EditUserDetails = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const user = useAuth()
    const ustatus = [ 'ACTIVE', 'SUSPENDED', 'DEACTIVATED', 'REGISTERED', 'DELETED' ]

    const [userData, setUserData] = useState({
         firstName: user.firstName,
        lastName: user.lastName,
        otherName: user.otherName,
        imageUrl: user.imageUrl,
        status: user.status,
        role: user.role
    })
   
    const success=()=> toast("User Details sucessfully Edited")
    const failed =(msg)=> toast(msg)
    function handleSave(e){
        e.preventDefault()
        const config ={
            method: "PUT",
            url: `${baseurl}/api/users/${id}`,
            data: userData,
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        axios(config)
        .then(res=> success())
        .catch(err=> failed(err.message))
    
}
  return (       
    <div className="editUser">
        <ToastContainer />
        
        <div className="back-div">
            <TbArrowNarrowLeft onClick={()=> navigate(-1)}/>
            Back
        </div>
        
        <form className="user-form">
            <div  className="light-back">
                <p>{userData.fullName}</p>
                
            </div>
            
                <section className="input-section">
                    <div className="inputuser-div">
                        <label>First Name</label>
                        <div>
                            <input type="text" defaultValue={userData.firstName}
                            onChange={(e)=> setUserData({...userData, firstName: e.target.value})}
                             />
                        </div>
                    </div>
                    <div className="inputuser-div">
                        <label>Last Name</label>
                        <div>
                            <input type="text" defaultValue={userData.lastName}
                            onChange={(e)=> setUserData({...userData, lastName: e.target.value})}
                            />
                        </div>
                    </div>
                    <div className="inputuser-div">
                        <label>Other Name</label>
                        <div>
                            <input type="text" defaultValue={userData.otherName}
                            onChange={(e)=> setUserData({...userData, otherName: e.target.value})}
                            />
                        </div>
                    </div>
                    <div className="inputuser-div">
                        <label>Role</label>
                        <div>
                            <input type="text" defaultValue={userData.role} disabled
                            />
                        </div>
                    </div>

                    <div className="inputuser-file">
                        <label>Add Image</label>
                        <div className="adder-file">
                            <input type="file" accept="image/*" 
                            onChange={(e)=>{
                                let reader = new FileReader();
                                reader.readAsDataURL(e.target.files[0])
                                reader.onload=(e)=>{
                                    setUserData({
                                        ...userData, imageUrl: e.target.result
                                    })
                                }
                            }}/>
                            {userData.imageUrl && <img src={userData.imageUrl} alt="selected" />}
                        </div>
                    </div>
                    
                    
                </section>
                
              <div className="select-div">
                        <label>Status</label>
                        <select>
                            <option default value={user.status}>{user.status}</option>
                           {ustatus.filter((item)=> item !== user.status)
                           .map((item,i)=>{
                            return <option value={item} key={i}>{item}</option>
                           })}
                        </select>
                </div>
                <div className="buttons">
                    <button className="btn-cancel" >Cancel</button>
                    <button className="btn-save" onClick={(e)=>handleSave(e)}>Save</button>
                </div>
        </form>
    </div>
  )
}

export default EditUserDetails