import React, { useState, useEffect } from 'react'
import { baseurl } from '../../Components/utils/baseurl'
import tile1 from "../../Components/images/tile-icon1.png"
import tile2 from "../../Components/images/tile-icon2.png"
import item2 from "../../Components/images/item(2).png"
import { SubOrganisationTable } from '../../Components/Tables'
import Tablenav from '../../Components/Tablenav'
import axios from "axios"
import { ToastContainer, toast} from "react-toastify"
import Carddets from '../../Components/Carddets'
import hocard from '../../Components/hocard'
import { useAuth } from '../../Components/ProtectDashboard/AuthDash'
import { useNavigate } from 'react-router-dom'

const SubOrganisations = () => {
    const user = useAuth()
    const navigate = useNavigate()

    const [subOrganisation, setSubOrganisation] = useState([])
    const [orgUsers, setOrgUsers] = useState([])
    const Card= hocard(Carddets)
    useEffect(()=>{
        const config={
            method: 'GET',
            url: `${baseurl}/api/organisations/${user.organisationId}/suborganisations`,
            headers:{
                Authorization: `Bearer ${user.token}`
            }
        }
        axios(config)
        .then(res=> setSubOrganisation(res.data.data))
        .catch(err=> console.error(err))
    },[ user])

    useEffect(()=>{

    },[])
  return (
    <div  className="center-dash">
      <ToastContainer/>
      <div className="card-flex">
     
      </div>
      <Tablenav dashfield="Organisation"  />
      <SubOrganisationTable array={subOrganisation} />
      </div>
  )
}

export default SubOrganisations