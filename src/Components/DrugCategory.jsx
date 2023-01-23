import axios from 'axios'
import React, { useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { useAuth } from "./ProtectDashboard/AuthDash"
import { baseurl } from './utils/baseurl'
import Tablenav from './Tablenav'
import { DrugsTable } from './Tables'

const DrugCategory = () => {
    const user= useAuth()
    const [drugCategory, setDrugCategory] = useState()
    const [pageNo, setPageNo] = useState(1)
    const {id} = useParams()
    useEffect(()=>{
        const config={
            method: "GET",
            url: `${baseurl}/api/drugs/category/${id}?pageNo=${pageNo}&sizePerPage=10`,
            headers:{
                Authorization: `Bearer ${user.token}`
            },

        }
        axios(config)
        .then(res=> setDrugCategory(res.data.data))
    },[user, id, pageNo])
  return (
    <div className="center-dash">
        <h1>DrugCategory</h1>
        <Tablenav dashfield="Drug Category" onClick={()=> console.log("drug category")}/>
        <DrugsTable array={drugCategory} pageNo={pageNo}/>
    </div>
  )
}

export default DrugCategory