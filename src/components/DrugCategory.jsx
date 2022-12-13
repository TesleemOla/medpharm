import axios from 'axios'
import React, { useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { useAuth } from "./ProtectDashboard/AuthDash"

const DrugCategory = () => {
    const user= useAuth()
    const [drugCategory, setDrugCategory] = useState()
    const {name} = useParams()
    useEffect(()=>{
        const config={
            method: "GET",
            url: `https://medipharm-test.herokuapp.com/api/drugscategories`,
            headers:{
                Authorization: `Bearer ${user.token}`
            }
        }
        axios(config)
        .then(res=> console.log(res))
    },[user, name])
  return (
    <div className="center-dash">
        DrugCategory
    </div>
  )
}

export default DrugCategory