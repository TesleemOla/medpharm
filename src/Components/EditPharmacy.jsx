import React, { useState, useEffect } from 'react'
import { useAuth } from "./ProtectDashboard/AuthDash"
import { AiOutlineMail } from "react-icons/ai"
import { MdEdit } from "react-icons/md"
import { TbArrowNarrowLeft } from "react-icons/tb"
import { useParams, useNavigate } from "react-router-dom"
import "./styles/Dashboard/Pharmacy/editpharm.scss"
import axios from 'axios'

const EditPharmacy = () => {
    const user = useAuth()
    const [dataItem, setDataItem] = useState({})

    useEffect(()=>{
        const config={
            method: "GET",
            url: `https://medipharm-test.herokuapp.com/api/suppliers/${id}`,
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        axios(config)
        .then(res=> setDataItem(res.data.data))
    })
    // console.log(dataItem)
    const {id} = useParams()
    const Navigate = useNavigate()
  return (
    <div className="center-dash">
        <div className="back-arrow">
            <TbArrowNarrowLeft onClick={()=> Navigate("/dashboard/Pharmacy")} />
            <span>Back</span>
        </div>
        <div className="d-flex">
            <section className="pharmacy-profile">
                <div className="grey-div">
                    <img src="https://media.istockphoto.com/id/1279887071/photo/business-background-with-arrays-of-data-in-virtual-space.jpg?b=1&s=170667a&w=0&k=20&c=-OiKRrQFdJ-IPb_8clfNOidycC5cHyyo0vU4bbyo18w="
                    alt="profile" className="profile-img"/>
                    
                </div>
                <div className="alignments">
                    <div className="edit-name">
                                <p>{dataItem.name}</p>
                                <p>{dataItem.email}</p>
                    </div>
                    <p className="click-edit">Edit Pharmacy <MdEdit/></p>
                    <div className="d-flex">
                        <p>Designation</p>
                        <p>Organisation</p>
                        </div>
                        <div className="d-flex">
                        <p>Status</p>
                        <div className="activity"><div className={dataItem.status === "ACTIVE"?
                        "dot green": "dot red"}></div>{dataItem.status} </div>
                    </div>

                    <p className="click-delete">Delete User</p>
                </div>
            </section>
            <section className="pharmacy-info">
                <div className="grey-div-bg">
                    <p>Organization Info</p>
                    <button>
                        <AiOutlineMail/>
                        Send Message</button>
                </div>
                <div>
                    <p className="contact-head">Contact Info</p>
                    <div className="contact-details">
                       
                        <div>
                            <p>Email</p>
                            <p>{dataItem.email}</p>
                        </div>
                         <div>
                            <p>Address</p>
                            <p>{dataItem.address}</p>
                        </div>
                        <div>
                            <p>Mobile</p>
                            <p>{dataItem.phoneNumber}</p>
                        </div>
                        
                    </div>
                    <div className="contact-details">
                       
                        <div>
                            <p>State</p>
                            <p>{dataItem.state}</p>
                        </div>
                        <div>
                            <p>No of Staff</p>
                            <p>{dataItem?.staff?.length}</p>
                        </div>
                        <div>
                            <p>Marketer</p>
                            <p>{dataItem.marketer}</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="contact-details">
                        <div className="d-flex">
                            <p>Subscription</p>
                            <div  className="activity"><div className={dataItem.status === "ACTIVE"?
                        "dot green": "dot red"}></div>{dataItem.status}</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default EditPharmacy