import {lazy} from "react"
export const PharmacyDash = lazy(() => import("./Components/PharmacyDash"));

export const ManufacturersDash = lazy(() => import("./Components/Manufacturers"));
export const DrugsDash = lazy(() => import("./Components/DrugsDash"));
export const InventoryDash = lazy(() => import("./Components/InventoryDash"))
// export const SubscriptionDash = lazy(() => import("./Components/SubscriptionDash"))
export const Dispatched = lazy(() => import("./Components/DispatchedDrugs"))
// export const SettingDash = lazy(() => import("./Components/SettingDash"))
export const HospitalDash = lazy(() => import("./Components/HospitalDash"));
export const OthersDash = lazy(() => import("./Components/OthersDash"));
export const EditStaffDash = lazy(()=> import("./Components/EditStaff"))
export const EditHospitalDash = lazy(() => import("./Components/Edithospital"))
export const DrugCategoryDash=lazy(()=> import("./Components/DrugCategory"))
