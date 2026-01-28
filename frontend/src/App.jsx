import './App.css'
import { useEffect } from "react"
import Dashboard from './app/dashboard'
import LoginPage from './app/login'
import Academics from './app/academics'
import Planning from './app/planning'
import Ret from './app/ret'
import Finance from './app/finance'
import Reports from './app/reports'
import Admin_Dashboard from './app/admin/admin-dashboard'
import Users from './app/admin/users'
import User_activities from './app/admin/user-activities'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// Map routes to titles
const pageTitles = {
  "/": "Login here | PDMS",
  "/dashboard": "Dashboard | PDMS",
};

// Component to handle dynamic titles
function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname] || "PDMS";
    document.title = title;
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <PageTitle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/ret" element={<Ret />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/admin-dashboard" element={<Admin_Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user-activities" element={<User_activities />} />
      </Routes>
    </Router>
  )
}

export default App
