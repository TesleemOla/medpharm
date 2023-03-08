import {lazy} from "react"
import Dashboard from "./Components/Dashboard"
const Dispatched = lazy(() => import("./Components/DispatchedDash"));
const MainDash = lazy(()=> import('./Components/MainDash'));
const ManufacturersDash = lazy(() => import("./Components/Manufacturers"));
const DrugsDash = lazy(() => import("./Components/DrugsDash"));
const InventoryDash = lazy(() => import("./Components/InventoryDash"))
const EditDrugCategory = lazy(()=> import("./Pages/Edit/EditDrugCategory"))
const EditDispatched = lazy(() => import("./Pages/Edit/EditDispatched"))
const EditManufacturer = lazy(() => import("./Pages/Edit/EditManufacturer"))
const SuppliersDash = lazy(() => import("./Components/SuppliersDash"));
const OrganisationDash = lazy(()=> import("./Pages/Dash/OrganisationDash"))
const SubOrganisation = lazy(() => import("./Pages/Dash/SubOrganisations"))
const Clients = lazy(()=> import("./Pages/Dash/ClientDash"))
const CreateInventory = lazy(() => import("./Pages/Create/CreateInventory"))
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
export const Organisation = Dashboard(OrganisationDash)
export const ClientDash = Dashboard(Clients)
export const SubOrganisationDash = Dashboard(SubOrganisation)
export const Main = Dashboard(MainDash)
export const AddInventory = Dashboard(CreateInventory)
export const CreateDispatchedDrug = Dashboard(CreateDispatched)
export const EditCategory = Dashboard(EditDrugCategory)
export const EditDispatchedDrug = Dashboard(EditDispatched)
export const EditManufacturerDash = Dashboard(EditManufacturer)
export const EditPharm = Dashboard(EditPharmacy)
export const UserSettingsDash = Dashboard(UserSettings)
export const EditSupplierDash = Dashboard(EditSupplier)
export const DashDrugCategory = Dashboard(DrugCategoryDash) 

export const AddManufacturer = Dashboard(CreateManufacturer)