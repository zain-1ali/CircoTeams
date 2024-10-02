import "./App.css";
import Signin from "./Pages/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import MyProfiles from "./Pages/MyProfiles";
import EditProfile from "./Pages/EditProfile";
import Team from "./Pages/Team";
import Connections from "./Pages/Connections";
import Analytics from "./Pages/Analytics";
import Devices from "./Pages/Devices";
import Support from "./Pages/Support";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div style={{ fontFamily: "Inter" }}>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/myprofiles" element={<MyProfiles />} />
          <Route path="/edit/:id" element={<EditProfile />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// profileType
// profileName
