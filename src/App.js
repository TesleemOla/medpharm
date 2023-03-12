import React, { useState, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"
import Login from "./Components/Login"
import ProtectRoutes from "./Components/ProtectRoutes"

import CreateCustomer from "./Pages/Create/CreateCustomer";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "./Components/Loading"

import {
  Manufacturers, Drugs, Inventory, Client, SubOrganisationDash,
  AddInventory, ApproveInv,
  CreateDrugDash, AddManufacturer, EditPharm, EditManufacturerDash,
  UsersDash,
  DispatchedDash, CreateDispatchedDrug, CreateSupplierDash, AddDrugCategory,
  Suppliers, UserSettingsDash, EditSupplierDash, EditCategory, EditDispatchedDrug,
   DashDrugCategory, Main } from "./Dashwrap"

export const EditDrug = lazy(() => import('./Pages/Edit/EditDrug'))
const EditInventory = lazy(() => import("./Pages/Edit/EditInventory"))
export const EditUserDetails = lazy(()=> import('./Pages/Edit/EditUserDetails'))
export const ChangePassword = lazy(() => import('./Pages/Edit/ChangePassword'))
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
          <Route path="/dashboard/drugcategory" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><DashDrugCategory /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/Clients" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><Client /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/Organisation/suborg" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><SubOrganisationDash /></Suspense></ProtectRoutes>} />
          
          
          <Route path="/dashboard/Settings" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><UserSettingsDash /></Suspense>
            </ProtectRoutes>} />
          <Route path="/dashboard/users/:id/:type" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><UsersDash /></Suspense></ProtectRoutes>} />
          <Route path="*" element={<Loading />} />
          <Route path="/onboarding/customer" element={<ProtectRoutes>
            <CreateCustomer /></ProtectRoutes>} />
          <Route path="/dashboard/dispatcheddrugs" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><DispatchedDash /></Suspense></ProtectRoutes>} />
          <Route path="/changePassword" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><ChangePassword /></Suspense></ProtectRoutes>} />
         
            {/* ***********CREATE ************ */}
          
          <Route path="/dashboard/createInventory" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><AddInventory /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/createDrug" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><CreateDrugDash /></Suspense></ProtectRoutes>} />
          
          <Route path="/dashboard/createDrugCategory" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><AddDrugCategory /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/createManufacturer" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><AddManufacturer /></Suspense></ProtectRoutes>} />
          
          <Route path="/dashboard/createDispatchedDrug" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><CreateDispatchedDrug /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/createSupplier" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><CreateSupplierDash /></Suspense></ProtectRoutes>} />      
              {/* ************************************** */}
              {/* **************EDITS */}
          
          <Route path="/dashboard/editPharmacy/:id" element={
          <ProtectRoutes>
            <Suspense fallback={<Loading />}><EditPharm/></Suspense>
          </ProtectRoutes>}/>
          <Route path="/dashboard/editDrugs/:id" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><EditDrug /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/editDispatcheddrugs/:id" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><EditDispatchedDrug /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/editDrugCategory/:id" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><EditCategory /></Suspense></ProtectRoutes>} />
              
          <Route path="/dashboard/editManufacturer/:id" element={
            <ProtectRoutes>
            <Suspense fallback={<Loading />}><EditManufacturerDash /></Suspense></ProtectRoutes>}/>
          <Route path="/dashboard/editInventory/:id" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><EditInventory /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/approveInventory/:id" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><ApproveInv /></Suspense></ProtectRoutes>} />
          <Route path="/dashboard/editSupplier/:id" element={
            <ProtectRoutes>
            <Suspense fallback={<Loading />}><EditSupplierDash /></Suspense></ProtectRoutes>} />
      
          <Route path="/dashboard/settings/edituser/:id" element={
            <ProtectRoutes>
              <Suspense fallback={<Loading />}><EditUserDetails /></Suspense></ProtectRoutes>} />
         
          
          
        </Routes>
      </Router>
    </div>
      )
}
export default App;
