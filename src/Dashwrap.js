import {lazy} from "react"
export const Dispatched = lazy(() => import("./Components/DispatchedDash"));

export const ManufacturersDash = lazy(() => import("./Components/Manufacturers"));
export const DrugsDash = lazy(() => import("./Components/DrugsDash"));
export const InventoryDash = lazy(() => import("./Components/InventoryDash"))
// export const SubscriptionDash = lazy(() => import("./Components/SubscriptionDash"))
// export const Dispatched = lazy(() => import("./Components/DispatchedDrugs"))
export const SettingDash = lazy(() => import("./Components/SettingDash"))
export const SuppliersDash = lazy(() => import("./Components/SuppliersDash"));

export const EditStaffDash = lazy(()=> import("./Components/EditStaff"))
export const EditSupplier= lazy(() => import("./Components/EditSupplier"))
export const DrugCategoryDash=lazy(()=> import("./Components/DrugCategory"))
