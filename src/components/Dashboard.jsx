import React from "react";
import Searchnav from "./Searchbar";
import Sidenav from "./Sidenav"
import Card from "./Card"
import CreateInventory from "./CreateInventory"
import "./styles/Dashboard.scss"

const Dashboard=()=>{
    return(
        <section className="dash">
            <Searchnav />
            <div >
            <Sidenav />
            <div>
                <Card/>
                <CreateInventory/>
            </div>
            </div>
        </section>
    )
}


export default Dashboard;