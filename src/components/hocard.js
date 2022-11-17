import React from 'react'
import "./styles/Dashboard/hoccard.scss"

const hocard = (Component)=>({...props}) => {
    return (<div className="reuse-card">
      <p>Show this</p>
        <Component {...props} />
    </div>
  )
}

export default hocard