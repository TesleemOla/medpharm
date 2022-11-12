import React, {useState}from "react";
import MainDash from "./MainDash";
import PharmacyDash from "./PharmacyDash";
import Searchnav from "./Searchbar";
import Sidenav from "./Sidenav"
import StaffDash from "./StaffDash";
import DrugsDash from "./DrugsDash"
import InventoryDash from "./InventoryDash"
import SubscriptionDash from "./SubscriptionDash"
import MessageDash from "./MessageDash"
import SettingDash from "./SettingDash"
import "./styles/Dashboard.scss"
import HospitalDash from "./HospitalDash";
import OthersDash from "./OthersDash";

const Dashboard=()=>{
    const [selected, setSelected] = useState()
    return(
        <section className="dash">
            <Searchnav  />
            <div >
            <Sidenav selected={selected} setSelected={setSelected} />
            <div>
                { selected === "Dashboard"?<MainDash/>
                :selected === "Staff"? <StaffDash />
                : selected === "Hospital"? <HospitalDash/>
                : selected === "Pharmacy"? <PharmacyDash/>
                :selected === "Others"? <OthersDash/>
                :selected === "Drugs"? <DrugsDash />
                :selected === "Inventory"? <InventoryDash/>
                :selected === "Subscription"? <SubscriptionDash/>
                :selected === "Message"? <MessageDash/>
                :selected === "Setting"? <SettingDash/>
                :<></>

                
                }
            </div>
            </div>
        </section>
    )
}


export default Dashboard;