import React, { useState, useEffect } from 'react'
import axios from "axios"
import { ToastContainer, toast} from "react-toastify"
import Carddets from '../../Components/Carddets'
import hocard from '../../Components/hocard'
import { useAuth } from '../../Components/ProtectDashboard/AuthDash'
import { useNavigate } from 'react-router-dom'
import { baseurl } from '../../Components/utils/baseurl'
import tile1 from "../../Components/images/tile-icon1.png"
import tile2 from "../../Components/images/tile-icon2.png"
import item2 from "../../Components/images/item(2).png"
import { OrganisationTable } from '../../Components/Tables'
import Tablenav from '../../Components/Tablenav'


const OrganistionDash = () => {
  const user = useAuth()
  const navigate = useNavigate()
  const [pageNo, setPageNo] = useState(1)
  const [dataSize, setDataSize] = useState()
  const [organisationData, setOrganisationData] = useState([])
  const [organisationsummary, setOrganisationsummary] = useState({})

  useEffect(()=>{
    if(user.organisationId){
    const config ={
      method: "GET",
      url: `${baseurl}/api/organisations/${user.organisationId}/clients`,
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
    axios(config)
    .then(res=> setOrganisationData(res.data.data))
    .catch(err=> toast(err.message))
  }
  },[user])
  useEffect(()=>{
    const config={
      url: `${baseurl}/api/reports/organisation/summary`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
    axios(config)
    .then(res=> setOrganisationsummary(res.data.data))
  })
  const handlePrevious = (e) => {
    e.preventDefault();
    setPageNo(()=>pageNo-1)
  };

  const handleNext = (e) => {
    e.preventDefault();
    setPageNo(()=>pageNo+1)
  };
   const Card= hocard(Carddets)
  return (
    <div  className="center-dash">
      <ToastContainer/>
      <div className="card-flex">
        <Card tile={tile1} item={item2} heading="All organisation" className='card-sm' value={organisationsummary.totalOrganisations}/>
        <Card tile={tile2} item={item2} heading="Hospitals" className='card-sm' value={organisationsummary.totalHospitals}/>
        <Card tile={tile2} item={item2} heading="Pharmacies" className='card-sm' value={organisationsummary.totalPharmacies}/>
        <Card tile={tile1} item={item2} heading="Other Clients" className='card-sm' value={organisationsummary.totalOtherClients}/>
      </div>
      <Tablenav dashfield="Organisation" onClick={()=>(navigate('/onboarding'))} array={organisationData} dis={!(user.permissions.find(item=> item === "create:organisation"))}/>
      <OrganisationTable array={organisationData} pageNo={pageNo} handleNext={handleNext} 
      handlePrev={handlePrevious} setDataSize/>
    </div>
  )
}

export default OrganistionDash