import './App.css'
import { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import ProtectedRoute from './protectedRoutes';

//pages
import Dashboard from './app/president/dashboard'
import LoginPage from './app/login'
import Academics from './app/president/academics'
import Planning from './app/president/planning'
import Ret from './app/president/ret'
import Finance from './app/president/finance'
import Reports from './app/president/reports'
import Admin_Dashboard from './app/admin/admin-dashboard'
import Users from './app/admin/users'
import User_activities from './app/admin/user-activities'
import NotFound from './app/not-found/not_found'
import SignupPage from './app/signup'


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
         <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/ret" element={<Ret />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/admin-dashboard" element={<Admin_Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user-activities" element={<User_activities />} />

        <Route path='/not-found' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/not-found' />} />

      </Routes>
    </Router>
  )
}

export default App
