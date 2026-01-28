import './App.css'
import { useEffect } from "react"
import Dashboard from './app/dashboard'
import LoginPage from './app/login'
import Academics from './app/academics'
import Planning from './app/planning'
import Ret from './app/ret'
import Finance from './app/finance'
import Reports from './app/reports'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// Map routes to titles
const pageTitles = {
  "/": "Login here | Presidential Dashboard Management System",
  "/dashboard": "Dashboard | Presidential Dashboard Management System",
};

// Component to handle dynamic titles
function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname] || "Presidential Dashboard Management System";
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
      </Routes>
    </Router>
  )
}

export default App
