import "./App.css";
import Signin from "./Pages/Signin";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Pages/Signup";
import MyProfiles from "./Pages/MyProfiles";
import EditProfile from "./Pages/EditProfile";
import Team from "./Pages/Team";
import Connections from "./Pages/Connections";
import Analytics from "./Pages/Analytics";
import Devices from "./Pages/Devices";
import Support from "./Pages/Support";
import { Toaster } from "react-hot-toast";
import { ReactNode, useEffect } from "react";
import ResetPassword from "./Pages/ResetPassword";
import SubscriptionPlans from "./Pages/SubscriptionPlans";

function App() {
  interface RequireAuthProps {
    children: ReactNode;
  }

  let theToken = localStorage.getItem("circoCompanyUid");
  // let theSessionToken = sessionStorage.getItem("gbQrId");
  // let isSigned = localStorage.getItem("gqrSigned");
  const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
    return theToken ? children : <Navigate to="/" />;
    // if (isSigned === "true") {
    //   return theToken ? children : <Navigate to="/" />;
    // } else if (isSigned === "false"){
    //   return theSessionToken ? children : <Navigate to="/" />;
    // } else {
    //   return <Navigate to="/" />;
    // }
  };

  const CheckLogedin: React.FC<RequireAuthProps> = ({ children }) => {
    return !theToken ? children : <Navigate to="/myprofiles" />;
    // if (isSigned === "true") {
    //   return theToken ? children : <Navigate to="/" />;
    // } else if (isSigned === "false"){
    //   return theSessionToken ? children : <Navigate to="/" />;
    // } else {
    //   return <Navigate to="/" />;
    // }
  };

  useEffect(() => {
    if (window.innerWidth < 800) {
      window.location.href = "https://onelink.to/srbhaw";
    }
  }, []);

  return (
    <div style={{ fontFamily: "Inter" }}>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <CheckLogedin>
                <Signin />
              </CheckLogedin>
            }
          />
          <Route path="/register" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/myprofiles"
            element={
              <RequireAuth>
                <MyProfiles />
              </RequireAuth>
            }
          />

          <Route
            path="/plans"
            element={
              <RequireAuth>
                <SubscriptionPlans />
              </RequireAuth>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <RequireAuth>
                <EditProfile />
              </RequireAuth>
            }
          />
          <Route
            path="/teams"
            element={
              <RequireAuth>
                <Team />
              </RequireAuth>
            }
          />
          <Route
            path="/connections"
            element={
              <RequireAuth>
                <Connections />
              </RequireAuth>
            }
          />
          <Route
            path="/analytics"
            element={
              <RequireAuth>
                <Analytics />
              </RequireAuth>
            }
          />
          <Route
            path="/devices"
            element={
              <RequireAuth>
                <Devices />
              </RequireAuth>
            }
          />
          <Route
            path="/support"
            element={
              <RequireAuth>
                <Support />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// profileType
// profileName
// templateId
// teamId
