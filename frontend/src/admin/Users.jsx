import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contacts/AuthProvider";
import { Button, Label, TextInput } from "flowbite-react";
import axios from "axios";

const Users = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [programData, setProgramData] = useState([]);

  useEffect(() => {
    // Function to fetch program data from the database
    const fetchPrograms = async () => {
      try {
        const response = await axios.get("http://localhost:5000/all-content"); // Adjust the API endpoint based on your backend routes
        setProgramData(response.data);
      } catch (error) {
        console.error("Error fetching program data:", error);
      }
    };

    // Call the fetchPrograms function
    fetchPrograms();
  }, []);

  const { createUser } = useContext(AuthContext);
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

  return (
    <div>
      <form
        onSubmit={handleSignup}
        className="flex max-w-md flex-col gap-4 mt-20 "
      >
        <h1 className="mb-5 text-2xl font-bold">Create Users Accounts</h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="test@earist.com"
            className="w-60"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            required
          />
          <div className="absolute left-[530px] top-[278px]">
            <input
              type="checkbox"
              id="showPassword"
              onChange={togglePasswordVisibility}
              className="ml-2"
            />
            <label
              htmlFor="showPassword"
              className="ml-1 text-xs font-semibold"
            >
              Show Password
            </label>
          </div>
        </div>
        {/* <div className="flex flex-col"> */}
        {/*   <Label htmlFor="content" value="Content" className="mb-2" /> */}
        {/*   <select className="w-52 p-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"> */}
        {/*     <option disabled>Select Content</option> */}
        {/*     {programData.map((program, id) => ( */}
        {/*       <option key={id} value={program.title}> */}
        {/*         {program.title} */}
        {/*       </option> */}
        {/*     ))} */}
        {/*   </select> */}
        {/* </div> */}
        <Button
          className="bg-red-900 hover:bg-amber-300 px-5 absolute bottom-8 right-[600px]"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Users;
