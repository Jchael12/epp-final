import { createBrowserRouter } from "react-router-dom";
import Home from "./src/components/Home";
import Programs from "./src/components/Programs";
import App from "./src/App";
import DashboardLayout from "./src/admin/DashboardLayout";
import UploadData from "./src/admin/UploadData";
import ManageData from "./src/admin/ManageData";
import EditData from "./src/admin/EditData";
import Signup from "./src/admin/Signup";
import Login from "./src/admin/Login";
import PrivateRoute from "./src/private/PrivateRoute";
import Logout from "./src/admin/Logout";
import CardDetails from "./src/components/CardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/programs",
        element: <Programs />,
      },
      {
        path: "/programs/:id",
        element: <CardDetails />,
      },
    ],
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin",
        element: <PrivateRoute isAdmin={true} />,
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadData />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageData />,
      },
      {
        path: "/admin/dashboard/edit-data/:id",
        element: <EditData />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/item/${params.id}`),
      },
    ],
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);

export default router;
