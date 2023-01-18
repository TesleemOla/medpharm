import React from "react";

import Searchnav from "./Searchbar";
import Sidenav from "./Sidenav"
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