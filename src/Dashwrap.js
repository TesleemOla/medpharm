import {lazy} from "react"
export const PharmacyDash = lazy(() => import("./Components/PharmacyDash"));

export const StaffDash = lazy(() => import("./Components/StaffDash"));
export const DrugsDash = lazy(() => import("./Components/DrugsDash"));
export const InventoryDash = lazy(() => import("./Components/InventoryDash"))
export const SubscriptionDash = lazy(() => import("./Components/SubscriptionDash"))
export const MessageDash = lazy(() => import("./Components/MessageDash"))
export const SettingDash = lazy(() => import("./Components/SettingDash"))
export const HospitalDash = lazy(() => import("./Components/HospitalDash"));
export const OthersDash = lazy(() => import("./Components/OthersDash"));