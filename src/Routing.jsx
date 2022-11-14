import React, {useState} from "react";
import { BrowserRouter as Router,
Routes, Route} from "react-router-dom"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import Onboarding from "./components/Onboarding"


const Routing=()=>{
    const [membership, setMembership] = useState("Client")
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/onboarding" element={<Onboarding membership={membership} setMembership={setMembership}/>} />
            </Routes>
        </Router>

    )
}


export default Routing;