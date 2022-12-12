import React from "react";
import ToggleButton from "react-toggle-button";
import "./styles/OnboardingPage/roles.scss"

const Roles = ({ formvalues, setFormvalues }) => {
  return (
    <div className="roles">
      
      <h3>Assign user Roles</h3>
      <div className="role-item">
      <p>Admin Full role</p>
          <ToggleButton
            value={formvalues.admin}
            onClick={() => {
              setFormvalues({...formvalues, admin: !formvalues.admin})
            }
          }
          />
      </div>
      <div className="role-item">
          <p>Access to Subscription</p>
          <ToggleButton
            value={formvalues.subscriptionAccess}
            onClick={() => {
              setFormvalues({...formvalues,
                subscriptionAccess: !formvalues.subscriptionAccess})
            }
          }
          />
      </div>
      <div className="role-item">
          <p>Inventory</p>
          <ToggleButton
            value={formvalues.inventory}
            onClick={() => {
              setFormvalues({...formvalues,inventory: !formvalues.inventory})
            }
          }
          />
      </div>
      <div className="role-item">
        <p>See other Staff
        <ToggleButton
            value={formvalues.seeOthers}
            onClick={() => {
              setFormvalues({...formvalues,seeOthers: !formvalues.seeOthers})
            }
          }
          />
         </p>
      </div>
      
    </div>
  );
};

export default Roles;