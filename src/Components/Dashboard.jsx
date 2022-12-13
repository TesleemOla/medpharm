import React, { useState }from "react";

import Searchnav from "./Searchbar";
import Sidenav from "./Sidenav"
import Loading from "./Loading"
import "./styles/Dashboard.scss"





const Dashboard=(Component)=>(props)=>{

    return(
        <section className="dash">
            <Searchnav  />
            <div >
            <Sidenav />
                <Component {...props} />
            </div>
        </section>
    )
}


export default Dashboard;