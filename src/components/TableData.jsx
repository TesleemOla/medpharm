import React from 'react'
import "./styles/Dashboard/dashtables.scss"

const Table = ({ name, id, mobile, email, address, status, actions,array}) => {
  return (
    <table className="dash-table">
        <thead>
          <tr>
          <td>
            <input type="checkbox"/>
          </td>
          <td>
            {name}
          </td>
          <td>
            {id}
          </td>
          <td>
            Mobile
          </td>
          <td>{email}</td>
          <td>{address}</td>
          <td>{status}</td>
          <td>{actions}</td>
          </tr>
        </thead>
        <tbody>
          {array.map((i,index)=>{
            return (
              <tr  className={index%2? "grayback": "whiteback"}>
                <td>
                  <input type="checkbox"/>
                </td>
                <td>{i.name}</td>
                <td>{i.id}</td>
                <td>{i.email}</td>
                <td>{i.address}</td>
                <td>{i.status}</td>
                <td>{i.actions}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
        
        
  )
}

export default Table