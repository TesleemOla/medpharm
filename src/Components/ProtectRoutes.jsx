import React from 'react'
import { useAuth } from "./ProtectDashboard/AuthDash"
import { Navigate } from "react-router-dom";


const ProtectRoutes = ({children})=> {
    const user = useAuth()
        if(!user){
            return <Navigate to='/login' replace={true}/>
        }
            return children
    }

export default ProtectRoutes