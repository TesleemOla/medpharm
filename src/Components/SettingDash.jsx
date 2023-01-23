import React, { useEffect, useState} from 'react'
import axios from "axios";
import { useAuth } from "./ProtectDashboard/AuthDash"
import { baseurl } from "./utils/baseurl"

const SettingDash = () => {
  const user = useAuth()
  console.log(user)
  useEffect(()=>{
    const config={
      method: "Get",
      url: `${baseurl}/api/dispatcheddrugs`,
      headers:{
        Authorization: `Bearer ${user.token}`
      }
    }
    axios(config)
    .then(res=> console.log(res))
  },[user])
  return (
    <div>SettingDash</div>
  )
}

export default SettingDash