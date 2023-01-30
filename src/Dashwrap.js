import {lazy} from "react"
import Dashboard from "./Components/Dashboard"
const Dispatched = lazy(() => import("./Components/DispatchedDash"));
const MainDash = lazy(()=> import('./Components/MainDash'));
const ManufacturersDash = lazy(() => import("./Components/Manufacturers"));
const DrugsDash = lazy(() => import("./Components/DrugsDash"));
const InventoryDash = lazy(() => import("./Components/InventoryDash"))
const EditInventory= lazy(() => import("./Components/EditInventory"))
const EditHospital = lazy(() => import("./Components/EditHospital"))
const SettingDash = lazy(() => import("./Components/SettingDash"))
const SuppliersDash = lazy(() => import("./Components/SuppliersDash"));
const CreateInventory = lazy(() => import("./Components/Create/CreateInventory"))
const CreateDrug = lazy(() => import("./Components/Create/CreateDrug"))
const EditStaff = lazy(()=> import("./Components/EditStaff"))
const EditSupplier= lazy(() => import("./Components/EditSupplier"))
const DrugCategoryDash=lazy(()=> import("./Components/DrugCategory"))
const EditPharmacy = lazy(() => import("./Components/EditPharmacy"))

export const Manufacturers = Dashboard(ManufacturersDash)
export const Drugs = Dashboard(DrugsDash)
export const Inventory = Dashboard(InventoryDash)
export const Suppliers = Dashboard(SuppliersDash)
export const DispatchedDash = Dashboard(Dispatched)
export const CreateDrugDash= Dashboard(CreateDrug)
export const Setting = Dashboard(SettingDash)
export const Main = Dashboard(MainDash)
export const AddInventory = Dashboard(CreateInventory)
export const EditInventoryDash = Dashboard(EditInventory)
export const EditPharm = Dashboard(EditPharmacy)
export const EditStaffDash = Dashboard(EditStaff)
export const EditSupplierDash = Dashboard(EditSupplier)
export const DashEditHospital = Dashboard(EditHospital)
export const DashDrugCategory = Dashboard(DrugCategoryDash) 