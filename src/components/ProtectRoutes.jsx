import React, {useContext} from 'react'
import { Navigate } from "react-router-dom";
import AuthContext from '../Context/AuthContext';


const ProtectRoutes = ({children})=> {
    const {userAuth } = useContext(AuthContext)
        if(!userAuth){
            return <Navigate to='/' replace={true}/>
        }
            return children
    }

export default ProtectRoutes