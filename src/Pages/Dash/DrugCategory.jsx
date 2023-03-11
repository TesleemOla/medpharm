import axios from 'axios'
import React, { useState, useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { useAuth } from "../../Components/ProtectDashboard/AuthDash"
import { baseurl } from '../../Components/utils/baseurl'
import Tablenav from '../../Components/Tablenav'
import { DrugCategoryTable } from '../../Components/Tables'

const DrugCategory = () => {
    const user= useAuth()
    const navigate = useNavigate()
    const [drugCategory, setDrugCategory] = useState([])
    const [pageNo, setPageNo] = useState(1)
  
    useEffect(()=>{
        const config={
            method: "GET",
            url: !user.clientId?`${baseurl}/api/drugscategories/paged?pageNo=${pageNo}&sizePerPage=10`
        : `${baseurl}/api/drugscategories/${user.clientId}/clients?clientId=${user.clientId}&pageNo=${pageNo}&sizePerPage=10`,
            headers:{
                Authorization: `Bearer ${user.token}`
            },

        }
       
        axios(config)
        .then(res=> setDrugCategory(res.data.data))
    },[user, pageNo])
  return (
    <div className="center-dash">
        
        <Tablenav dashfield="Drug Category" array={drugCategory}
         onClick={()=> navigate("/dashboard/createDrugCategory")}/>
        <DrugCategoryTable array={drugCategory} pageNo={pageNo} 
        />
    </div>
  )
}

export default DrugCategory