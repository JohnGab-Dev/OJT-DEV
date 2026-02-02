import { Navigate } from "react-router-dom";

export default function AuthRoutes({ children }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if ((token && role) && role == "superadmin") {
    return <Navigate to="/admin-dashboard" replace />;
  }

  if ((token && role) && role == "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  if ((token && role) && role == "user") {
    return <Navigate to="/user-dashboard" replace />;
  }

  return children;
}