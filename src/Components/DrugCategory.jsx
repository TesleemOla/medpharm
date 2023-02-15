import axios from 'axios'
import React, { useState, useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { useAuth } from "./ProtectDashboard/AuthDash"
import { baseurl } from './utils/baseurl'
import Tablenav from './Tablenav'
import { DrugCategoryTable } from './Tables'

const DrugCategory = () => {
    const user= useAuth()
    const navigate = useNavigate()
    const [drugCategory, setDrugCategory] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const {id} = useParams()
    useEffect(()=>{
        const config={
            method: "GET",
            url: !user.clientId?`${baseurl}/api/drugs/category/${id}?pageNo=${pageNo}&sizePerPage=10`
        : `${baseurl}/api/drugscategories/${user.clientId}/clients?clientId=${user.clientId}&pageNo=${pageNo}&sizePerPage=10`,
            headers:{
                Authorization: `Bearer ${user.token}`
            },

        }
       
        axios(config)
        .then(res=> setDrugCategory(res.data.data))
    },[user, id, pageNo])
  return (
    <div className="center-dash">
        <h1 className="dc-a">Drug Type</h1>
        <Tablenav dashfield="Drug Category" array={drugCategory}
         onClick={()=> navigate("/dashboard/createDrugCategory")}/>
        <DrugCategoryTable array={drugCategory} pageNo={pageNo}
        />
    </div>
  )
}

export default DrugCategory