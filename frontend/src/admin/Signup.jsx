import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contacts/AuthProvider";
import gLogo from "../assets/google-logo.svg";

const Signup = () => {
  const { createUser, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("error");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSignup = (e) => {
    e.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert("Sign up successfully!");
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  //signup using gmail
  const handleRegister = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        alert("Sign Up successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-red-800 justify-around items-center hidden">
        <div>
          <h1 className="text-yellow-300 font-bold text-6xl font-sans">
            Earist Cavite Campus
          </h1>
          <p className="text-white mt-3 text-center text-4xl">
            Earist Extension Programs
          </p>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white" onSubmit={handleSignup}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Admin</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Signup here</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-red-800  hover:bg-yellow-300 hover:text-red-800 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 transition delay-75 ease-in-out"
          >
            Signup
          </button>
          {/* <button */}
          {/*   onClick={handleRegister} */}
          {/*   className="block w-full bg-red-800 hover:bg-yellow-300 hover:text-red-800 mt-4 py-2 rounded-2xl text-white font-semibold mb-2" */}
          {/* > */}
          {/*   <img src={gLogo} className="w-6 h-6 inline-block" /> */}
          {/*   Sign up with Google */}
          {/* </button> */}
          <p className="text-sm ml-2  cursor-pointer">
            Already had an account?{" "}
            <Link
              to="/login"
              className="text-blue-800 hover:text-blue-500 underline font-semibold"
            >
              Login
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
