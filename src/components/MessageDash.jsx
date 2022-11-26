import React, { useEffect, useContext } from 'react'
import axios from "axios"
import AuthContext from '../Context/AuthContext'

const MessageDash = () => {
  const { userAuth } = useContext(AuthContext)
  useEffect(()=>{
    const config={
      method: "get",
      url:"https://medipharm-test.herokuapp.com/api/roles",
      headers:{
        Authorization: `Bearer ${userAuth.token}`
      }
    }
    axios(config)
    .then(res=> console.log(res))
  },[userAuth])
  return (
    <div>MessageDash</div>
  )
}

export default MessageDash