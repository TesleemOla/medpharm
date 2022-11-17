import React from 'react'
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies()

const ProtectRoutes = (Component)=>({...props})=> {
    const token = cookies.get("TOKEN");
        if(token){
            return <Component {...props}/>
        }else{
                return (
                    <Navigate to={{
                        pathname: '/',
                        state: {
                            from: props.location,
                        }
                    }}
                />
                    )
            }
        }


export default ProtectRoutes