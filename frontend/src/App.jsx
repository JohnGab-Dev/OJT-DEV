import './App.css'
import { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import ProtectedRoute from './routeManagement/protectedRoutes';
import AuthRoutes  from './routeManagement/authRoutes';
import { Toaster } from 'react-hot-toast';

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
      <Toaster />
      <Routes>
        {/* authRoutes */}
        <Route path="/" element={ <AuthRoutes ><LoginPage /></AuthRoutes>} />
        <Route path="/login" element={<AuthRoutes><LoginPage /></AuthRoutes>} />
        <Route path="/signup" element={<AuthRoutes><SignupPage /></AuthRoutes>} />

          {/* superadminRoutes */}
            <Route path="/admin-dashboard" element={<ProtectedRoute><Admin_Dashboard /></ProtectedRoute>} />
            <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
            <Route path="/user-activities" element={<ProtectedRoute><User_activities /></ProtectedRoute>} />

          {/* adminRoutes */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/academics" element={<ProtectedRoute><Academics /></ProtectedRoute>} />
            <Route path="/planning" element={<ProtectedRoute><Planning /></ProtectedRoute>} />
            <Route path="/ret" element={<ProtectedRoute><Ret /></ProtectedRoute>} />
            <Route path="/finance" element={<ProtectedRoute><Finance /></ProtectedRoute>} />
            <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
          {/* users */}
        
          {/* 404 Not Found Route */}
        <Route path='/not-found' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/not-found' />} />

      </Routes>
    </Router>
  )
}

export default App
