import {lazy} from "react"
import Dashboard from "./Components/Dashboard"

const Dispatched = lazy(() => import("./Components/DispatchedDash"));
const MainDash = lazy(()=> import('./Pages/Dash/MainDash'));
const ManufacturersDash = lazy(() => import("./Components/Manufacturers"));
const DrugsDash = lazy(() => import("./Pages/Dash/DrugsDash"));
const InventoryDash = lazy(() => import("./Pages/Dash/InventoryDash"))
const EditDrugCategory = lazy(()=> import("./Pages/Edit/EditDrugCategory"))
const EditDispatched = lazy(() => import("./Pages/Edit/EditDispatched"))
const EditManufacturer = lazy(() => import("./Pages/Edit/EditManufacturer"))
const SuppliersDash = lazy(() => import("./Components/SuppliersDash"));
const ClientDash = lazy(()=> import("./Pages/Dash/ClientDash"))
const SubOrganisation = lazy(() => import("./Pages/Dash/SubOrganisations"))
const Users = lazy(()=>import("./Pages/Dash/UsersDash"))
const CreateInventory = lazy(() => import("./Pages/Create/CreateInventory"))
const ApproveInventory = lazy(()=> import("./Pages/Edit/ApproveInventory"))
const CreateDrug = lazy(() => import("./Pages/Create/CreateDrug"))
const CreateDispatched = lazy(()=> import("./Pages/Create/CreateDispatched"))
const CreateDrugCategory = lazy(() => import("./Pages/Create/CreateDrugCategory"))
const CreateManufacturer = lazy(()=> import('./Pages/Create/CreateManufacturer'))
const CreateSupplier = lazy(() => import('./Pages/Create/CreateSupplier'))
const UserSettings = lazy(()=> import("./Components/UserSettings"))
const EditSupplier= lazy(() => import("./Pages/Edit/EditSupplier"))
const DrugCategoryDash=lazy(()=> import("./Pages/Dash/DrugCategory"))
const EditPharmacy = lazy(() => import("./Components/EditPharmacy"))

export const Manufacturers = Dashboard(ManufacturersDash)
export const Drugs = Dashboard(DrugsDash)
export const Inventory = Dashboard(InventoryDash)
export const Suppliers = Dashboard(SuppliersDash)
export const DispatchedDash = Dashboard(Dispatched)
export const CreateDrugDash= Dashboard(CreateDrug)
export const AddDrugCategory = Dashboard(CreateDrugCategory)
export const CreateSupplierDash= Dashboard(CreateSupplier)
export const Client = Dashboard(ClientDash)
export const UsersDash = Dashboard(Users)
export const SubOrganisationDash = Dashboard(SubOrganisation)
export const Main = Dashboard(MainDash)
export const AddInventory = Dashboard(CreateInventory)
export const ApproveInv = Dashboard(ApproveInventory)
export const CreateDispatchedDrug = Dashboard(CreateDispatched)
export const EditCategory = Dashboard(EditDrugCategory)
export const EditDispatchedDrug = Dashboard(EditDispatched)
export const EditManufacturerDash = Dashboard(EditManufacturer)
export const EditPharm = Dashboard(EditPharmacy)
export const UserSettingsDash = Dashboard(UserSettings)
export const EditSupplierDash = Dashboard(EditSupplier)
export const DashDrugCategory = Dashboard(DrugCategoryDash) 

export const AddManufacturer = Dashboard(CreateManufacturer)