import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function AdminRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    // Not logged in - redirect to login
    // alert("Please login to access admin area");
    return <Navigate to="/login" replace />;
  }

  if (!user.isAdmin) {
    // Logged in but not admin - redirect to home
    // alert("Access denied. Admin only.");
    return <Navigate to="/" replace />;
  }

  // Is admin - show the page
  return children;
}