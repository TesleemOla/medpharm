import React, { useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { baseurl } from "../../Components/utils/baseurl"
import "../../Components/styles/Loginpage/changepassword.scss"
import { useAuth } from '../../Components/ProtectDashboard/AuthDash'

const ChangePassword = () => {
    const user = useAuth()

    const navigate = useNavigate()
    const [formvalues, setFormvalues] = useState({})
    function toastMsg(msg){ return toast(msg)}
    function handlePwdChange(e){
        e.preventDefault()
        if(!formvalues.oldPassword || !formvalues.newPassword1 || !formvalues.newPassword2){
            toastMsg("All fields are required")
        } else if(formvalues.newPassword1 !== formvalues.newPassword2){
            toastMsg("New password should be the same")
        } else{
            const config = {
                method: "PUT",
                url: `${baseurl}/api/users/changepassword`,
                headers: {
                    Authorization: `Bearer ${user.token}`
                },
                data:{
                    oldPassword: formvalues.oldPassword,
                    newPassword: formvalues.newPassword1
                }
            }
            axios(config)
            .then(res=>{
                console.log(res)
                toastMsg("Password changed successfully")
                navigate(-1)})
                
            .catch(err=> toastMsg(err.message))
        }
    }
  return (
    <div className="changePassword">
        <ToastContainer />
        <h3>Change Password</h3>
        <form>
            <input type="password" placeholder='Enter old password' className="password"
            onChange={(e)=> setFormvalues({...formvalues, oldPassword: e.target.value})}/>
            <input type="password" placeholder="Enter new password" className='password'
            onChange={(e)=> setFormvalues({...formvalues, newPassword1: e.target.value})}/>
            <input type="password" placeholder="Re-enter new password" className='password'
            onChange={(e)=> setFormvalues({...formvalues, newPassword2: e.target.value})}/>
            <button className="change-pwd"
            onClick={(e)=> handlePwdChange(e)}>Change Password</button>
        </form>
    </div>
  )
}

export default ChangePassword