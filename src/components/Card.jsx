import React, { useState, useEffect} from "react";
import axios from "axios";

const Card=()=>{
    const [drugData, setDrugData] = useState()
    useEffect(()=>{
        axios({
        method: 'get',
        url: "https://medipharm-test.herokuapp.com/drugscategories"
        })
        .then(res=> console.log(res))
        
    }
    ,[])
    return(
        <div className="topcard">
            <h3>{drugData}</h3>
            
        </div>
    )
}

export default Card;