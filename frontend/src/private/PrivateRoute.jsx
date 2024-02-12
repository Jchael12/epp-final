import { useContext } from "react";
import { AuthContext } from "../contacts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "flowbite-react";

const PrivateRoute = ({ children, isAdmin }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }

  if (!user) {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  if (isAdmin && user.email !== "banaga.rendell.eccbscs@gmail.com") {
    // If the route requires admin privileges and the user is not an admin, redirect to the home page
    return <Navigate to="/" state={{ from: location.pathname }} replace />;
  }

  // If the user is authenticated and has the required privileges, render the children components
  return children;
};

export default PrivateRoute;
