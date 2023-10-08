import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";

// Pages
import {
  Home,
  Events,
  Team,
  Contact,
  Signup,
  Quiz,
  Login,
  Profile,
  Forgot,
  ForgotPassword,
  ErrorPage,
  AllCertificates,
  ScorePage,
  AdminPage,
  AllAdminRequest,
  SendMail,
} from "../src/pages";
import Layout from "./Components/Layout";
import { useUserContext } from "./hooks/useUserContext";

const App = () => {
  const { user } = useUserContext();

  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/signup"
              element={user ? <Navigate to="/profile" /> : <Signup />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to="/profile" /> : <Login />}
            />
            <Route
              path="/profile"
              element={user ? <Profile /> : <Navigate to="/login" />}
            />
            <Route
              path="/quiz/:category"
              element={
                localStorage.getItem("user") ? (
                  <Quiz />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/allCertificates"
              element={user ? <AllCertificates /> : <Login />}
            />
            <Route path="/forgot/" element={<Forgot />} />
            <Route path="/forgot/:id" element={<ForgotPassword />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/allrequests" element={<AllAdminRequest />} />
            <Route path="/admin/sendMail" element={<SendMail />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
