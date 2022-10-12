import React from 'react'

const Regnav = ({navlist,navclass, logo, logoclass, Diag, Diagclass}) => {
  return (
    <nav className={navclass}>
          <img src={logo} alt="logo" className={logoclass}/>
          <ul>
            {
                navlist.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span className="number">{item.id}</span>
                            {item.name}
                        </li>
                    )
                })
            }
          </ul>
          {/* <img src={Diag} alt="Diagram" className="logo-bg"/> */}
        </nav>
  )
}

export default Regnav