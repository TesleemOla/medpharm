import React, { useEffect } from 'react'
import axios from "axios"
import { useAuth } from "./ProtectDashboard/AuthDash"

const MessageDash = () => {
  const user = useAuth()
  useEffect(()=>{
    const config={
      method: "get",
      url:"https://medipharm-test.herokuapp.com/api/roles",
      headers:{
        Authorization: `Bearer ${user.token}`
      }
    }
    axios(config)
    .then(res=> console.log(res))
  },[user])
  return (
    <div>MessageDash</div>
  )
}

export default MessageDash