import { useContext } from "react";
import { AuthContext } from "../contacts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await logout();
      alert("Sign-out successful.");
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="h-screen bg-red-800 flex items-center justify-center">
      <button
        type="button"
        className="bg-white px-8 py-2 text-red-900 hover:bg-amber-400 font-semibold rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
