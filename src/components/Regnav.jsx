import React from 'react'

const Regnav = ({navlist,navclass, logo, logoclass, Diag, pgitem}) => {
  return (
    <nav className={navclass}>
          <img src={logo} alt="logo" className={logoclass}/>
          
          <ul>
            {
                navlist.map((item)=>{
                    return(
                        <li key={item.id} 
                        className={item.id <= pgitem?"blue":"white"}>
                            <span className="number">{item.id}</span>
                            {item.name}
                        </li>
                    )
                })
            }
          </ul>
          <img src={Diag} alt="Diagram" className="logo-bg"/>
        </nav>
  )
}

export default Regnav