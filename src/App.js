import React, { useState, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"
import Login from "./Components/Login"
import ProtectRoutes from "./Components/ProtectRoutes"
import Dashboard from "./Components/Dashboard"
import Onboarding from "./Components/Onboarding"
import EditInventory from "./Components/EditInventory"
import CreateInventory from "./Components/CreateInventory"
import './App.css';
import MainDash from "./Components/MainDash";
import Loading from "./Components/Loading"
import EditPharmacy from "./Components/EditPharmacy";
import { PharmacyDash, StaffDash, DrugsDash, InventoryDash, 
  // SubscriptionDash,
   MessageDash,
// SettingDash,
 HospitalDash, OthersDash, EditStaffDash, EditHospitalDash, DrugCategoryDash } from "./Dashwrap"

function App() {
  const [membership, setMembership] = useState("Client")
  const Pharmacy = Dashboard(PharmacyDash)
  const Staff = Dashboard(StaffDash)
  const Drugs = Dashboard(DrugsDash)
  const Inventory = Dashboard(InventoryDash)
  const Hospital = Dashboard(HospitalDash)
  const Others = Dashboard(OthersDash)
  const Message = Dashboard(MessageDash)
  // const Subscription= Dashboard(SubscriptionDash)
  // const Setting = Dashboard(SettingDash)
  const Main = Dashboard(MainDash)
  const AddInventory =  Dashboard(CreateInventory)
  const EditPharm = Dashboard(EditPharmacy)
  const DashEditStaff = Dashboard(EditStaffDash)
  const DashEditHospital = Dashboard(EditHospitalDash)
  const DashDrugCategory = Dashboard(DrugCategoryDash)
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
          <Route path="/dashboard/editPharmacy/:id" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><EditPharm/></Suspense>
          </ProtectRoutes>}/>
          <Route path="/dashboard/Staff" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><Staff /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/editStaff/:id" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><DashEditStaff /></Suspense></ProtectRoutes>}/>
          <Route path="/dashboard/Drugs" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><Drugs /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/drugs/:name" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><DashDrugCategory /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/Inventory" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><Inventory /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/editInventory/:id" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><EditInventory /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/createInventory" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><AddInventory /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/hospital" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><Hospital /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/editHospital/:id" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><DashEditHospital /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/Others" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><Others/></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/message" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><Message/></Suspense></ProtectRoutes>} />
          {/* <Route path="/dashboard/subscription" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><Subscription/></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/settings" element={<ProtectRoutes>
            <Suspense fallback={<Loading />}><Setting/></Suspense></ProtectRoutes>} /> */}
          <Route path="*" element={<Loading/>} />
          <Route path="/onboarding" element={<Onboarding membership={membership} setMembership={setMembership} />} />
          
        </Routes>
      </Router>
    </div>
      )
}
export default App;
