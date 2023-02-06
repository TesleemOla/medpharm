import React, { useState, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"
import Login from "./Components/Login"
import ProtectRoutes from "./Components/ProtectRoutes"

import Onboarding from "./Components/Onboarding";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "./Components/Loading"

import { Manufacturers, Drugs, Inventory, AddInventory, 
  CreateDrugDash, AddManufacturer, EditPharm,
  Setting,
   DispatchedDash, EditInventoryDash,
  Suppliers, EditStaffDash, EditSupplierDash,
   DashDrugCategory, Main } from "./Dashwrap"
export const EditDrug = lazy(() => import('./Components/EditDrug'))

function App() {
  const [membership, setMembership] = useState("Client")
  

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
          <Route path="/dashboard/suppliers" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><Suppliers /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/Dispatcheddrugs" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><DispatchedDash /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/Inventory" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><Inventory /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/Drugs" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><Drugs /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/settings" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><Setting /></Suspense></ProtectRoutes>} />
          <Route path="*" element={<Loading />} />
          <Route path="/onboarding" element={<Onboarding membership={membership} setMembership={setMembership} />} />

          
         
            {/* ***********CREATE ************ */}
          
          <Route path="/dashboard/createInventory" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><AddInventory /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/createDrug" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><CreateDrugDash /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/createManufacturer" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><AddManufacturer /></Suspense></ProtectRoutes>} />    
              {/* ************************************** */}
              {/* **************EDITS */}
          <Route path="/dashboard/dispatcheddrugs" element={
          <ProtectRoutes>
            <Suspense fallback={<Loading />}><DispatchedDash /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/editPharmacy/:id" element={
          <ProtectRoutes>
            <Suspense fallback={<Loading />}><EditPharm/></Suspense>
          </ProtectRoutes>}/>
          <Route path="/dashboard/editDrugs/:id" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><EditDrug /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/editManufacturer/:id" element={
            <ProtectRoutes>
            <Suspense fallback={<Loading />}><EditStaffDash /></Suspense></ProtectRoutes>}/>
          <Route path="/dashboard/editInventory/:id" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><EditInventoryDash /></Suspense></ProtectRoutes>} />
          
          <Route path="/dashboard/editSupplier/:id" element={
            <ProtectRoutes>
            <Suspense fallback={<Loading />}><EditSupplierDash /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/drugcategory/:id" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><DashDrugCategory /></Suspense></ProtectRoutes>} />
          
          
        </Routes>
      </Router>
    </div>
      )
}
export default App;
