import React, { useState, useEffect } from 'react'
import { useAuth } from "./ProtectDashboard/AuthDash"
import { AiOutlineMail } from "react-icons/ai"
import { MdEdit } from "react-icons/md"
import { TbArrowNarrowLeft } from "react-icons/tb"
import { useParams, useNavigate } from "react-router-dom"
import { baseurl } from './utils/baseurl'
import "./styles/Dashboard/Pharmacy/editpharm.scss"
import axios from 'axios'

const UserSettings = () => {
    const user = useAuth()
    const [dataItem, setDataItem] = useState(user)
    const settingsData =  [{
                            itemName: "Full Name",
                            dt: dataItem.fullName
                        },
                        { 
                            itemName: "Email",
                            dt: dataItem.emailAddress

                        },
                        {
                            itemName: "Mobile",
                            dt: dataItem.phoneNumber
                        },
                        {
                            itemName: "Referral code",
                            dt: dataItem.referralCode
                        }
                        ]
    const navigate = useNavigate()
  return (
    <div className="center-dash">
        <div className="edittar">
        <div className="back-arrow">
            <TbArrowNarrowLeft onClick={()=> navigate(-1)} />
            <span>Back</span>
        </div>
        <div className="d-flex">
            <section className="pharmacy-profile">
                <div className="grey-div">
                    <img src={dataItem.imageUrl || "https://media.istockphoto.com/id/1279887071/photo/business-background-with-arrays-of-data-in-virtual-space.jpg?b=1&s=170667a&w=0&k=20&c=-OiKRrQFdJ-IPb_8clfNOidycC5cHyyo0vU4bbyo18w="}
                    alt="profile" className="profile-img"/>
                    
                </div>
                <div className="alignments">
                    <div className="edit-name">
                                <p>{dataItem.fullName}</p>
                                <p>{dataItem.role}</p>
                    </div>
                    <p className="click-edit"
                    onClick={()=>navigate(`/dashboard/settings/edituser/${user.id}`)}>Edit Profile <MdEdit/></p>
                    <div>
                        
                        <p>Organisation</p>
                        <p className="org-n"> {dataItem.organisationName}</p>
                        </div>
                        <div>
                        <div className="d-flex_fd">
                            <p>Subscription</p>
                            <div  className="activity"><div className={dataItem.status === "ACTIVE"?
                        "dot green": "dot red"}></div>{dataItem.status}</div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="pharmacy-info">
                <div className="grey-div-bg">
                    <p>Staff Info</p>
                    <button onClick={()=> navigate('/changePassword')}>
                        Change Password
                    </button>
                    
                </div>
                <div>
                    <p className="contact-head">Contact Info</p>
                    <div className="contact-details">
                     {   settingsData.map(({itemName, dt}, i)=>{
                        return (
                            <div className="detail-itm" key={i}>
                                <p>{itemName}</p>
                                <p className="itm-bld">{dt}</p>
                            </div>
                        )
                     })}                
                        
                </div>
                </div>
            </section>
        </div>
        </div>
    </div>
  )
}

export default UserSettings