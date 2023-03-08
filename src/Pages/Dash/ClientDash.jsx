import React, { useState, useEffect } from 'react'
import { baseurl } from '../../Components/utils/baseurl'
import tile1 from "../../Components/images/tile-icon1.png"
import tile2 from "../../Components/images/tile-icon2.png"
import item2 from "../../Components/images/item(2).png"
import { ClientsTable } from '../../Components/Tables'
import Tablenav from '../../Components/Tablenav'
import axios from "axios"
import { ToastContainer, toast} from "react-toastify"
import Carddets from '../../Components/Carddets'
import hocard from '../../Components/hocard'
import { useAuth } from '../../Components/ProtectDashboard/AuthDash'
import { useNavigate, useParams } from 'react-router-dom'

const ClientDash = () => {
    const user = useAuth()
    const navigate = useNavigate()
    const {id} = useParams()
    const [clients, setClients] = useState([])
   
    const Card= hocard(Carddets)
    useEffect(()=>{
        const config={
            method: 'GET',
            url: `${baseurl}/api/organisations/${id}/clients`,
            headers:{
                Authorization: `Bearer ${user.token}`
            }
        }
        axios(config)
        .then(res=> console.log(res.data.data))
        .catch(err=> console.error(err))
    },[id, user])

    useEffect(()=>{

    },[])
  return (
    <div  className="center-dash">
      <ToastContainer/>
      <div className="card-flex">
        {/* <Card tile={tile1} item={item2} heading="All organisation" className='card-sm'/>
        <Card tile={tile2} item={item2} heading="Administrators" className='card-sm'/>
        <Card tile={tile1} item={item2} heading="Other roles" className='card-sm'/> */}
      </div>
      <Tablenav dashfield="Clients"  />
      <ClientsTable array={clients} />
      </div>
  )
}

export default ClientDash