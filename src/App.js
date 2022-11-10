import React, {useState} from 'react';
// import Onboarding  from "./components/Onboarding"
// import Login from "./components/Login"
// import Dashboard from "./components/Dashboard"
// import Sidenav from "./components/Sidenav"
// import Searchbar from "./components/Searchbar"
import Routing from "./Routing"
import './App.css';

function App() {
  // const [membership, setMembership] = useState("Client")
  return (

    <div className="App">
      <Routing />
      {/* <Searchbar/>
      <Sidenav/> */}
      {/* <Dashboard/> */}
      {/* <Onboarding membership={membership} setMembership={setMembership}/> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
