import React, { useState, Suspense, lazy } from "react";
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
import { PharmacyDash, ManufacturersDash, DrugsDash, InventoryDash, 
  // SubscriptionDash, // SettingDash,
   Dispatched,
  HospitalDash, OthersDash, EditStaffDash, EditHospitalDash,
   DrugCategoryDash } from "./Dashwrap"
export const EditDrug = lazy(() => import('./Components/EditDrug'))

function App() {
  const [membership, setMembership] = useState("Client")
  const Pharmacy = Dashboard(PharmacyDash)
  const Manufacturers = Dashboard(ManufacturersDash)
  const Drugs = Dashboard(DrugsDash)
  const Inventory = Dashboard(InventoryDash)
  const Hospital = Dashboard(HospitalDash)
  const Others = Dashboard(OthersDash)
  const DispatchedDash= Dashboard(Dispatched)
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
          <Route path="/login" element={<Login />} />
          {/* Each component is wrapped with a suspense for loading and a protectroute component to prevent
          unauthorized access */}
          <Route path="/" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><Main /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/manufacturers" element={
            <ProtectRoutes>
            <Suspense fallback={<Loading />}><Manufacturers /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/Dispatcheddrugs" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><DispatchedDash /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/Inventory" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><Inventory /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/Drugs" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><Drugs /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/editDrugs/:id" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><EditDrug /></Suspense></ProtectRoutes>} />
          
          <Route path="/dashboard/drugcategory/:id" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><DashDrugCategory /></Suspense></ProtectRoutes>} />

          <Route path="/dashboard/editInventory/:id" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><EditInventory /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/createInventory" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><AddInventory /></Suspense></ProtectRoutes>} />
              
              {/* ************************************** */}

          <Route path="/dashboard/pharmacy" element={
          <ProtectRoutes>
            <Suspense fallback={<Loading />}><Pharmacy /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/editPharmacy/:id" element={
          <ProtectRoutes>
            <Suspense fallback={<Loading />}><EditPharm/></Suspense>
          </ProtectRoutes>}/>
        
          <Route path="/dashboard/editStaff/:id" element={
            <ProtectRoutes>
            <Suspense fallback={<Loading />}><DashEditStaff /></Suspense></ProtectRoutes>}/>
         
          <Route path="/dashboard/hospital" element={
            <ProtectRoutes>
            <Suspense fallback={<Loading />}><Hospital /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/editHospital/:id" element={
            <ProtectRoutes>
            <Suspense fallback={<Loading />}><DashEditHospital /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/Others" element={
            <ProtectRoutes>
            <Suspense fallback={<Loading />}><Others/></Suspense></ProtectRoutes>} />
          
          {/* <Route path="/dashboard/subscription" element={
            <ProtectRoutes>
            <Suspense fallback={<Loading />}><Subscription/></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/settings" element={
            <ProtectRoutes>
            <Suspense fallback={<Loading />}><Setting/></Suspense></ProtectRoutes>} /> */}
          <Route path="*" element={<Loading/>} />
          <Route path="/onboarding" element={<Onboarding membership={membership} setMembership={setMembership} />} />
          
        </Routes>
      </Router>
    </div>
      )
}
export default App;
