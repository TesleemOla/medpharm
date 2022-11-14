import React from 'react'
import HOCCard from "./HOCcard"

import "./styles/Dashboard/maindash.scss"

const MainDash = () => {
  const ReuseHOC = HOCCard("Like it")
  return (
    <div className="center-dash">
      <ReuseHOC />
      <ReuseHOC />
      <ReuseHOC />
     
    </div>
  )
}

export default MainDash