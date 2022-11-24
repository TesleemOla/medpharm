import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"
import Login from "./components/Login"
import ProtectRoutes from "./components/ProtectRoutes";
import Dashboard from "./components/Dashboard"
import Onboarding from "./components/Onboarding"
import EditInventory from "./components/EditInventory"
import './App.css';

function App() {
  const [membership, setMembership] = useState("Client")
  const ProtectDash = ProtectRoutes(Dashboard)
  const ProtectInventory = ProtectRoutes(EditInventory)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<ProtectDash/>} />
          <Route path="/onboarding" element={<Onboarding membership={membership} setMembership={setMembership} />} />
          <Route path="/dashboard/editInventory" element={<ProtectInventory/>} />
        </Routes>
      </Router>
    </div>
      )
}
export default App;
