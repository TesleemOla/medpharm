import React, { useState, useEffect } from 'react'
import axios from "axios"
import { ToastContainer, toast} from "react-toastify"

import { useAuth } from '../../Components/ProtectDashboard/AuthDash'
import { useNavigate, useParams } from 'react-router-dom'
import { baseurl } from '../../Components/utils/baseurl'

import { UsersTable } from '../../Components/Tables'
import Tablenav from '../../Components/Tablenav'


const UsersDash = () => {
  const user = useAuth()
  const navigate = useNavigate()
  const {id, type} = useParams()

  const [pageNo, setPageNo] = useState(1)
  const [dataSize, setDataSize] = useState(10)
  const [users, setUsers] = useState([])


  useEffect(()=>{
    
    const config ={
      method: "GET",
      url: `${baseurl}/api/users/${id}/company?type=${type}&pageNo=${pageNo}&sizePerPage=${dataSize}`,
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
    axios(config)
    .then(res=> setUsers(res.data.data))
    // .catch(err=> toast(err.message))
  },[user,dataSize, id, type, pageNo])

  const handlePrevious = (e) => {
    e.preventDefault();
    setPageNo(()=>pageNo>0 && pageNo-1)
  };

  const handleNext = (e) => {
    e.preventDefault();
    setPageNo(()=>pageNo+1)
  };
   
  return (
    <div  className="center-dash">
      <ToastContainer/>
      <div className="card-flex">
        
      </div>
      <Tablenav dashfield="Staff" onClick={()=>(navigate('/onboarding'))} />
      <UsersTable array={users} pageNo={pageNo} handleNext={handleNext} 
      handlePrev={handlePrevious} setDataSize={setDataSize}/>
    </div>
  )
}

export default UsersDash