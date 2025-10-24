import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    alert("You must log in first!");
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
