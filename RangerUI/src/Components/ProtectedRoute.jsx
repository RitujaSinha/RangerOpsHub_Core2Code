import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ allowedRoles, children }) {
  const userData = localStorage.getItem("user");

  if (!userData) {
    return <Navigate to="/login" replace />;
  }

  const user = JSON.parse(userData);

  if (!user?.role) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
