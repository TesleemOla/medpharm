import React, { useState, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"
import Login from "./components/Login"
import ProtectRoutes from "./components/ProtectRoutes"
import Dashboard from "./components/Dashboard"
import Onboarding from "./components/Onboarding"
import EditInventory from "./components/EditInventory"
import './App.css';
import MainDash from "./components/MainDash";
import Loading from "./components/Loading"

const PharmacyDash = lazy(() => import("./components/PharmacyDash"));

const StaffDash = lazy(() => import("./components/StaffDash"));
const DrugsDash = lazy(() => import("./components/DrugsDash"));
const InventoryDash = lazy(() => import("./components/InventoryDash"))
const SubscriptionDash = lazy(() => import("./components/SubscriptionDash"))
const MessageDash = lazy(() => import("./components/MessageDash"))
const SettingDash = lazy(() => import("./components/SettingDash"))
const HospitalDash = lazy(() => import("./components/HospitalDash"));
const OthersDash = lazy(() => import("./components/OthersDash"));
function App() {
  const [membership, setMembership] = useState("Client")
  const Pharmacy = Dashboard(PharmacyDash)
  const Staff = Dashboard(StaffDash)
  const Drugs = Dashboard(DrugsDash)
  const Inventory = Dashboard(InventoryDash)
  const Hospital = Dashboard(HospitalDash)
  const Others = Dashboard(OthersDash)
  const Message = Dashboard(MessageDash)
  const Subscription= Dashboard(SubscriptionDash)
  const Setting = Dashboard(SettingDash)
  const Main = Dashboard(MainDash)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* Each component is wrapped with a suspense for loading and a protectroute component to prevent
          unauthorized access */}
          <Route path="/dashboard" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><Main /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/pharmacy" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><Pharmacy /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/Staff" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><Staff /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/Drugs" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><Drugs /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/Inventory" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><Inventory /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/editInventory" element={<ProtectRoutes>
          <Suspense fallback={<Loading />}><EditInventory /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/hospital" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><Hospital /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/Others" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><Others/></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/message" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><Message/></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/subscription" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><Subscription/></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/settings" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><Setting/></Suspense></ProtectRoutes>} />
          <Route path="*" element={<><Loading /><Loading/><Loading/></>} />
          <Route path="/onboarding" element={<Onboarding membership={membership} setMembership={setMembership} />} />
          
        </Routes>
      </Router>
    </div>
      )
}
export default App;
