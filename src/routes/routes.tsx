import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layouts/root";
import Home from "../pages/home";
import Auth from "../pages/auth";
import StudentRegister from "../pages/dashboard/student-register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>error</div>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "dashboard/total-student",
        element: "total student",
      },
      {
        path: "dashboard/student-info",
        element: "student-info",
      },
      {
        path: "dashboard/register",
        element: <StudentRegister />,
      },
      {
        path: "dashboard/payment",
        element: "payment",
      },
      {
        path: "dashboard/payment-info",
        element: "payment-info",
      },
    ],
  },
]);
