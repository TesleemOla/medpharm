import React, {useState} from 'react';
// import Onboarding  from "./components/Onboarding"
import Login from "./components/Login"
import './App.css';

function App() {
  const [membership, setMembership] = useState("Client")
  return (
    <div className="App">
      {/* <Onboarding membership={membership} setMembership={setMembership}/> */}
      <Login />
    </div>
  );
}

export default App;
