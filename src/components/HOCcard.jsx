import React from 'react'
import "./styles/Dashboard/hoccard.scss"

const HOCcard = (Component)=>({...props}) => {
    (<div className="reuse-card">
        <Component props={props} />
    </div>
  )
}

export default HOCcard