import React from 'react'

const Tablehead = ({field1, field2, field3, field4, field5,field6, field7, field8}) => {
  return (
    <thead>
          <tr>
          <td>
            <input type="checkbox"/>
          </td>
          <td>
            {field1}
          </td>
          <td>
            {field2}
          </td>
          <td>{field3}</td>
          <td>{field4}</td>
          <td>{field5}</td>
          <td>{field6}</td>
          <td>{field7}</td>
          <td>{field8}</td>
          </tr>
        </thead>
  )
}

export default Tablehead