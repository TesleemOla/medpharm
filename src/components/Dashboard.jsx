import React, {lazy, Suspense, useState}from "react";
import MainDash from "./MainDash";
import Searchnav from "./Searchbar";
import Sidenav from "./Sidenav"
import Loading from "./Loading"
import "./styles/Dashboard.scss"

const PharmacyDash = lazy(()=> import("./PharmacyDash"));

const StaffDash = lazy(()=>import("./StaffDash"));
const DrugsDash = lazy(()=>import("./DrugsDash"));
const InventoryDash = lazy(()=>import("./InventoryDash"))
const SubscriptionDash = lazy(()=>import("./SubscriptionDash"))
const MessageDash = lazy(()=>import("./MessageDash"))
const SettingDash =lazy(()=>import("./SettingDash"))
const HospitalDash = lazy(()=>import("./HospitalDash"));
const OthersDash =lazy(()=>import("./OthersDash"));



const Dashboard=()=>{
    const [selected, setSelected] = useState()
    return(
        <section className="dash">
            <Searchnav  />
            <div >
            <Sidenav selected={selected} setSelected={setSelected} />
            <div>
                { selected === "Dashboard"?
                <MainDash/>
                :selected === "Staff"? <Suspense fallback={<Loading/>}>
                <StaffDash /></Suspense>
                : selected === "Hospital"? <Suspense fallback={<Loading/>}>
                    <HospitalDash/></Suspense>
                : selected === "Pharmacy"? <Suspense fallback={<Loading/>}>
                    <PharmacyDash/></Suspense>
                :selected === "Others"? <Suspense fallback={<Loading/>}>
                    <OthersDash/></Suspense>
                :selected === "Drugs"? <Suspense fallback={<Loading/>}>
                    <DrugsDash /></Suspense>
                :selected === "Inventory"? <Suspense fallback={<Loading/>}>
                    <InventoryDash/></Suspense>
                :selected === "Subscription"? <Suspense fallback={<Loading/>}>
                    <SubscriptionDash/></Suspense>
                :selected === "Message"? <Suspense fallback={<Loading/>}>
                    <MessageDash/></Suspense>
                :selected === "Setting"? <Suspense fallback={<Loading/>}>
                    <SettingDash/></Suspense>
                :<></>

                
                }
            </div>
            </div>
        </section>
    )
}


export default Dashboard;