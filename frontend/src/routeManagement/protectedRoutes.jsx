import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const location = useLocation();
  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (role !== "superadmin" && role !== "admin" && role !== "user") {
    return <Navigate to="/" replace />;
  }

  if (role === "superadmin") {
    if (location.pathname === "/dashboard" || location.pathname === "/academics" || location.pathname === "/planning" || location.pathname === "/ret" || location.pathname === "/finance" || location.pathname === "/reports") {
      return <Navigate to="/admin-dashboard" replace />;
    }
  }

  if (role === "admin") {
    if (location.pathname === "/admin-dashboard" || location.pathname === "/users" || location.pathname === "/user-activities") {
      return <Navigate to="/dashboard" replace />;
    }
  }

  if (role === "user") {
    if (location.pathname !== "/user-dashboard") {
      return <Navigate to="/user-dashboard" replace />;
    }
  }

  return children;
}