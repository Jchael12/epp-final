import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import earistLogo from "../assets/earist-logo-1.png";
import { AuthContext } from "../contacts/AuthProvider";

function Nav() {
  const inTransition = 300;
  const outTransition = 100;
  const [isOpen, setIsOpen] = useState(false);
  const [dashboardAvailable, setDashboardAvailable] = useState(false);
  const [clientLoggedIn, setClientLoggedIn] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const clientEmails = ["abbas.johnmichael.eccbsc@gmail.com"];

  useEffect(() => {
    if (user) {
      if (user.email === "banaga.rendell.eccbscs@gmail.com") {
        setDashboardAvailable(true);
        setClientLoggedIn(false);
      } else {
        setDashboardAvailable(false);
        if (clientEmails.includes(user.email)) {
          setClientLoggedIn(true);
        }
      }
    }
  }, [user]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleLinkClick = (path) => {
    if (window.location.pathname === path) {
      window.scrollTo(0, 0);
    } else {
      navigate(path);
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/", { replace: true, state: { key: Date.now() } });
      window.location.reload(true);
    } catch (error) {
      console.log("Error logging out: ", error);
    }
  };

  return (
    <header className="w-full p-8 bg-[#fafafa]/80 backdrop-blur-sm fixed top-0 z-20 ">
      <nav className="flex items-center justify-between gap-32 z-10">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9 md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <img
            src={earistLogo}
            className="md:block hidden absolute w-24 top-1 md:left-10 right-0"
          />
          <h1
            className={`md:ml-32 ml-14 md:top-10 md:flex hidden absolute font-semibold ${
              dashboardAvailable && !clientLoggedIn
                ? "md:text-[11px] md:top-11"
                : "md:text-[17px]"
            } text-red-900 uppercase`}
          >
            Eulogio Amang Rodriguez Institute of Science and Technology
          </h1>
          <h1 className="ml-14 text-md top-10 absolute md:hidden text-red-900">
            Earist Extension Program
          </h1>
        </div>
        <div
          className={`md:hidden absolute left-5 top-20 dark:bg-gray-500/30 dark:hover:text-pink-600 ease-in-out dark:border-none bg-white z-10 border border-gray-200 rounded-lg shadow-lg p-4 ${
            isOpen
              ? "opacity-100 visible transition duration-" + inTransition
              : "opacity-0 invisible transition duration-" + outTransition
          }`}
        >
          <div className="flex flex-col gap-6 text-gray-900 text-md">
            {!clientLoggedIn && (
              <Link
                onClick={closeMenu}
                className="dark:text-white dark:hover:text-[#dc2626] ease-in-out duration-300 hover:bg-red-800 p-2 hover:text-amber-300 rounded-sm"
                to="/"
              >
                Home
              </Link>
            )}
            {!clientLoggedIn && (
              <Link
                onClick={closeMenu}
                className="dark:text-white dark:hover:text-[#dc2626] ease-in-out duration-300 hover:bg-red-800 p-2 hover:text-amber-300 rounded-sm"
                to="/programs"
              >
                Programs & Events
              </Link>
            )}
          </div>
        </div>
        <div className="hidden md:flex gap-10 text-gray-700 text-md uppercase">
          <Link
            className="text-red-900 hover:bg-red-800 hover:p-2 p-2 ease-in-out duration-300 hover:text-amber-300 rounded-sm"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-red-900 hover:bg-red-800 hover:p-2 p-2 ease-in-out duration-300 hover:text-amber-300 rounded-sm"
            to="/programs"
          >
            Programs & Events
          </Link>
          {!user && (
            <>
              <Link
                className="text-red-900 hover:bg-red-800 hover:p-2 p-2 ease-in-out duration-300 hover:text-amber-300 rounded-sm"
                to="/login"
              >
                Login
              </Link>
            </>
          )}
          {dashboardAvailable && (
            <Link
              to="/admin/dashboard/manage"
              className="text-red-900 hover:bg-red-800 hover:p-2 p-2 ease-in-out duration-300 hover:text-amber-300 rounded-sm"
            >
              Admin Dashboard
            </Link>
          )}
          {user && (
            <button
              className="text-red-900 hover:bg-red-800 hover:p-2 p-2 ease-in-out duration-300 hover:text-amber-300 rounded-sm"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Nav;
