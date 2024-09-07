import "./App.css";
import Signin from "./Pages/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import MyProfiles from "./Pages/MyProfiles";
import EditProfile from "./Pages/EditProfile";

function App() {
  return (
    <div style={{ fontFamily: "Inter" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/myprofiles" element={<MyProfiles />} />
          <Route path="/edit/:id" element={<EditProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
