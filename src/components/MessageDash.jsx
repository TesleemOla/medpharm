import React, { useState, useEffect } from 'react'
import axios from "axios"
import Cookies from "universal-cookie"

const cookies = new Cookies()
const token = cookies.get("TOKEN")
const MessageDash = () => {
  useEffect(()=>{
    const config={
      method: "get",
      // 'https://medipharm-test.herokuapp.com/api/roles'
      url:"https://medipharm-test.herokuapp.com/api/roles",
      headers:{
        Authorization: `Bearer ${token}`
      }
    }
    axios(config)
    .then(res=> console.log(res))
  },[])
  return (
    <div>MessageDash</div>
  )
}

export default MessageDash