import React from 'react'
import hocard from "./hocard"
import Loading from "./Loading"

const ClientDash = () => {
    const ReuseHOC = hocard(Loading)
  return (
    <div className="center-dash">
      <div className="cards">
        <ReuseHOC />
        <ReuseHOC/>
        <ReuseHOC/>
      </div>
    </div>
  )
}

export default ClientDash